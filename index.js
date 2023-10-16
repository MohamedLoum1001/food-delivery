// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Assure-toi que le chemin est correct

const rootElement = document.getElementById('root') || document.getElementById('app-root');

ReactDOM.render(<App />, rootElement);

// Si tu utilises React 18, utilise plutôt la méthode createRoot
ReactDOM.createRoot(rootElement).render(<App />);
