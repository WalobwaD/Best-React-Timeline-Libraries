import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ReactVerticalTimelineComponent } from "./RVT"
import ReactChrono from './React-Chrono.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactChrono />
  </React.StrictMode>,
)
