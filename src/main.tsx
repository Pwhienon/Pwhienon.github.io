import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mbds/react/tokens.css'
import 'material-symbols/outlined.css'
import '@mbds/react/styles.css'
import '@fontsource/inconsolata/300.css'
import '@fontsource/inconsolata/400.css'
import '@fontsource/inconsolata/500.css'
import '@fontsource/inconsolata/600.css'
import './site.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
