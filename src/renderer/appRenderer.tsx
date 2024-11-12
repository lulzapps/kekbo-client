import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@renderer/window/WindowFrame';
import App from '@components/App';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <WindowFrame title='ERWT Boilerplate' platform='windows'>
    <App />
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
