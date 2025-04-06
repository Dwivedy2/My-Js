import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import './index.css'
import App from './App.jsx'

const custom = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)

function app() {
  const username = "My Evaluated Expression"
  return (
    <a href="https://www.google.com" target='_blank'>Google {username}</a>
  )
}

const username = "My Evaluated Expression"
const a = createElement('a', {href: "https://www.google.com", target: "_blank"}, "Launch Google", username)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    a
    // app()
  // </StrictMode>,
)
