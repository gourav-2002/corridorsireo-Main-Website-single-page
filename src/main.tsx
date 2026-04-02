import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotFound from './NotFound.tsx';
import './index.css';

const validPaths = ['/', '/index.html', ''];
const path = window.location.pathname;
const Root = validPaths.includes(path) ? App : NotFound;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
