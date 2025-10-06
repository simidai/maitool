<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import JsonInputDisplay from './JsonInputDisplay.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JsonInputDisplay />
  </StrictMode>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import JsonInputDisplay from './JsonInputDisplay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/maitool">
      <JsonInputDisplay />
    </Router>
  </React.StrictMode>
>>>>>>> 7f751cd (change index.html)
);
