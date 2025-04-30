
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
