import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentPlayersContextProvider } from './store/CurrentPlayersContext';
import { AllGamesContext, AllGamesContextProvider } from './store/AllGamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllGamesContextProvider>
        <CurrentPlayersContextProvider>
          <App />
        </CurrentPlayersContextProvider> 
      </AllGamesContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

