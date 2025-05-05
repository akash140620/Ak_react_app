import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App1 />
    </BrowserRouter>
  </React.StrictMode>
);
 
reportWebVitals();