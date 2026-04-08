import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotFound from './NotFound.tsx';
import './index.css';

const validPaths = ['/', '/index.html', ''];
const path = window.location.pathname;
const Root = validPaths.includes(path) ? App : NotFound;

const rootEl = document.getElementById('root')!;

// If SSG pre-rendered HTML exists, hydrate it; otherwise do a fresh render
if (rootEl.innerHTML.trim()) {
  hydrateRoot(
    rootEl,
    <StrictMode>
      <Root />
    </StrictMode>
  );
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <Root />
    </StrictMode>
  );
}
