import { AnimatePresence } from 'framer-motion';
import { useApp } from './context/AppState';
import { Welcome } from './pages/Welcome';
import { FoodSelection } from './pages/FoodSelection';
import { ActivitySelection } from './pages/ActivitySelection';
import { FinalItinerary } from './pages/FinalItinerary';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Sparkles } from './components/Sparkles';
import { Carriage } from './components/Carriage';

function AppContent() {
  const { state } = useApp();

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans text-plum selection:bg-rose/30">
      <div className="bg-magical" />
      <Sparkles />
      <Carriage />
      
      <ProgressIndicator currentStep={state.step} />

      <AnimatePresence mode="wait">
        {state.step === 1 && <Welcome key="step1" />}
        {state.step === 2 && <FoodSelection key="step2" />}
        {state.step === 3 && <ActivitySelection key="step3" />}
        {state.step === 4 && <FinalItinerary key="step4" />}
      </AnimatePresence>
    </div>
  );
}

export default AppContent;
