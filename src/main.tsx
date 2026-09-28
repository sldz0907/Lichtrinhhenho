import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContent from './App.tsx'
import { AppProvider } from './context/AppState.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppContent />
    </AppProvider>
  </React.StrictMode>,
)
