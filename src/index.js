import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/store'
import './index.css'
import * as process from 'process'
import { Provider } from 'react-redux'

window.global = window
window.process = process
window.Buffer = []
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
