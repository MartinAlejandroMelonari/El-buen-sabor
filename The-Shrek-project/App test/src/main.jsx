import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { UserProvider } from './context/UserProvider';
import { Auth0ProviderWithNavigate } from './components/Auth0/Auth0ProviderWithNavigate';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <UserProvider>
          <App />
        </UserProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
)
