import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App';
// Add style componet
import App from './styleComponent/src/App';

// Add styled by css module system
import App from './styleComponentCss/src/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
