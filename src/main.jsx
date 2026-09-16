import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/** Fallback: if React never mounts the hero (error/other route), clear the shell. */
window.setTimeout(() => {
  const el = document.getElementById('lcp-hero')
  if (el) el.remove()
}, 8000)
