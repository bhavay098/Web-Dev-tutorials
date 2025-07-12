import { StrictMode } from 'react'   // StrictMode helps with highlighting potential problems in the app (optional but recommended in dev)
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'   // Import Provider from react-redux to connect Redux with React
import { store } from './app/store.js'   // Import the configured Redux store


createRoot(document.getElementById('root')).render(   // Mount the React app to the HTML element with id="root"
  <Provider store={store}>   {/* Wrap the App in the Redux Provider so all components can access the Redux store */}   
    <App />
  </Provider>,
)