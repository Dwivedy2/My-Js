import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const custom = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    custom
  // </StrictMode>,
)
