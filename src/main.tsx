import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ogImage from './NANA HALIMA EMPOWERMENT INITIATIVE/1000033740.jpg';

// Ensure Open Graph and Twitter image meta tags are present and point to the bundled asset URL
function ensureMeta(propertyOrName: string, value: string, isProperty = true) {
  const selector = isProperty ? `meta[property="${propertyOrName}"]` : `meta[name="${propertyOrName}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    if (isProperty) el.setAttribute('property', propertyOrName);
    else el.setAttribute('name', propertyOrName);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

// Set og:image and twitter:image to the imported image URL so social cards use the correct image
ensureMeta('og:image', ogImage, true);
ensureMeta('twitter:image', ogImage, false);
ensureMeta('og:image:alt', 'Her Excellency Dr. Ambassador Halima Sulaiman Zakari', true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
