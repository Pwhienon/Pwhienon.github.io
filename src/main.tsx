import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inconsolata/300.css'
import '@fontsource/inconsolata/400.css'
import '@fontsource/inconsolata/500.css'
import '@fontsource/inconsolata/600.css'
import '@fontsource/inconsolata/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
