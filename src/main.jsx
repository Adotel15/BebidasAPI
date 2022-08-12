import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Para instalar boostrap, se necesita instalarlo en la terminal y agregar este import
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
