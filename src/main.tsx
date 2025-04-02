import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavermapsProvider } from 'react-naver-maps';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavermapsProvider ncpClientId="nlyd5wl65e">
      <App />
    </NavermapsProvider>
  </StrictMode>
);
