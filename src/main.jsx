import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JsonInputDisplay from './JsonInputDisplay.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JsonInputDisplay />
  </StrictMode>
);
