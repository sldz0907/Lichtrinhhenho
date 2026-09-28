import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type AppState = {
  date: string;
  time: string;
  location: string;
  foodId: string;
  activityId: string;
  step: number;
};

type AppContextType = {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const initialState: AppState = {
  date: '2026-10-01',
  time: '',
  location: '',
  foodId: '',
  activityId: '',
  step: 1,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(initialState);

  const updateState = (updates: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 4) }));
  };

  const prevStep = () => {
    setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
  };

  return (
    <AppContext.Provider value={{ state, updateState, nextStep, prevStep }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
