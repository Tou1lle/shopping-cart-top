import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTester from './AppTester.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTester />
  </StrictMode>,
)
