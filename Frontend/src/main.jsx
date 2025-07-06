import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import CaptainContext from './context/CaptainContext';
import UserContext from './context/UserContext';
import SocketProvider from './context/SocketContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CaptainContext>
        <UserContext>
          <SocketProvider>
          <App />
          </SocketProvider>
        </UserContext>
      </CaptainContext>
    </BrowserRouter>
  </React.StrictMode>
);
