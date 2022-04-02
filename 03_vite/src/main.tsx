import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {worker} from './mocks/browser'

import './asset/style/style.scss'
import App from './app'

if (import.meta.env.DEV) {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
