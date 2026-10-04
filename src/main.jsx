import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, redirect } from 'react-router-dom'
import { UserProvider } from './components/UserContext.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import { LanguageProvider } from './components/LanguageContext.jsx'
createRoot(document.getElementById('root')).render(
 <Auth0Provider
  domain={import.meta.env.VITE_Domain}
  clientId={import.meta.env.VITE_ClientId}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  cacheLocation="localstorage"
><UserProvider>
 <LanguageProvider>
 <BrowserRouter>
  <App />

</BrowserRouter>
 </LanguageProvider>
</UserProvider>
</Auth0Provider>
)
