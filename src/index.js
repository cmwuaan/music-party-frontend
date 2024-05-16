import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import { MusicContextProvider } from './utils/MusicContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MusicContextProvider>
          <App />
        </MusicContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
// reportWebVitals();
