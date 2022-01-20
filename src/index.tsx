import { StrictMode } from 'react'

import { render } from 'react-dom'

import 'tailwindcss/tailwind.css'
import { Router } from './services/Router'

render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('root')
)
