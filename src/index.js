
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Change the import statement for createRoot
import { createRoot } from 'react-dom/client';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
