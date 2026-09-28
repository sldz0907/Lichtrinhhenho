import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppState';
import { activities } from '../data/activities';
import { Crown, ArrowLeft, Sparkles } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const ActivitySelection = () => {
  const { state, updateState, nextStep, prevStep } = useApp();
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.activityId) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    nextStep();
  };

  return (
    <motion.div 
      className="min-h-screen w-full flex flex-col pt-24 pb-12 px-4 md:px-12 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center flex-grow">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-black text-plum mb-0 layered-text leading-tight">
            Sau khi ăn chúng mình sẽ.....
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-20 w-full max-w-[800px] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {activities.map((activity, index) => {
            const isSelected = state.activityId === activity.id;
            return (
              <motion.div
                key={activity.id}
                whileHover={{ y: -15, scale: 1.05 }}
                onClick={() => updateState({ activityId: activity.id })}
                className={twMerge(
                  "relative flex flex-col items-center justify-center p-6 rounded-full cursor-pointer w-[150px] h-[150px] md:w-[180px] md:h-[180px] text-center transition-all duration-500",
                  isSelected ? "bg-white shadow-[0_0_40px_rgba(214,174,98,0.6)] border-[3px] border-gold z-10" : "bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(201,133,155,0.2)] hover:border-rose/30"
                )}
              >
                {/* Floating Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose/20 to-champagne/20 opacity-0 group-hover:opacity-100"
                  animate={isSelected ? { opacity: [0.5, 1, 0.5] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div 
                  className="text-5xl md:text-6xl mb-4 relative z-10 drop-shadow-md"
                  animate={isSelected ? { y: [0, -10, 0], scale: [1, 1.1, 1] } : { y: [0, -5, 0] }}
                  transition={{ duration: isSelected ? 2 : 3 + (index * 0.5), repeat: Infinity, ease: "easeInOut" }}
                >
                  {activity.icon}
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold text-plum mb-1 relative z-10">{activity.name}</h3>
                
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-4 -right-4 z-20 w-12 h-12 rounded-full bg-ivory shadow-[0_0_20px_rgba(214,174,98,0.8)] flex items-center justify-center border-2 border-gold"
                    >
                      <Crown size={24} className="text-gold fill-gold" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Sparkling aura when selected */}
                {isSelected && (
                  <motion.div className="absolute -inset-4 text-gold/40 z-0 pointer-events-none flex items-center justify-center">
                    <Sparkles size={100} strokeWidth={1} className="animate-spin-slow" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div 
          className="w-full max-w-4xl flex justify-between items-center mt-auto pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={prevStep}
            className="flex items-center gap-3 text-plum/60 hover:text-plum transition-colors px-6 py-3 font-bold tracking-widest text-sm uppercase"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>
          
          <div className="flex flex-col items-end relative">
            <button 
              onClick={handleNext}
              className="btn-sweep relative overflow-hidden rounded-full bg-gradient-to-r from-rose to-champagne text-white px-10 py-5 font-bold tracking-widest shadow-[0_10px_30px_rgba(201,133,155,0.4)] hover:shadow-[0_15px_40px_rgba(201,133,155,0.6)] hover:-translate-y-1 transition-all duration-300 text-sm md:text-base border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">KẾT THÚC ✦</span>
            </button>
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bottom-full mb-4 right-0 text-sm text-plum font-semibold bg-white/90 px-6 py-2 rounded-full shadow-lg border border-rose/30 whitespace-nowrap"
                >
                  Em chọn hoạt động nhé ♡
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
