import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FetchingTester from './FetchingTester.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchingTester />
  </StrictMode>,
)
