import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './useTransition.css'
import './formAction.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
