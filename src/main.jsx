// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n';
import { CookiesProvider } from 'react-cookie'; // 👈 Importar aquí
import { HelmetProvider } from 'react-helmet-async'; // 👈 Agrega esta línea

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider> {/* 👈 Envuelve todo con HelmetProvider */}
    <CookiesProvider> {/* 👈 ENVOLVER App en CookiesProvider */}
      <App />
    </CookiesProvider>
    </HelmetProvider>
  </StrictMode>
);
