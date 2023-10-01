import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import { BudgetsProvider } from "./contexts/BudgetsContext"


// Initialize service worker and notification permissions
if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.ready.then((registration) => {
    // The service worker is ready
    if (Notification.permission !== 'granted') {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Permission granted, you can now send notifications
        }
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <BudgetsProvider>
        <App />
        </BudgetsProvider>
      </ThemeProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)
