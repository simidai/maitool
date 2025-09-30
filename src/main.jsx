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
);
