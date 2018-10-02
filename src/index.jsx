import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(<App />, rootEl)
}

if(module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

render()

registerServiceWorker()