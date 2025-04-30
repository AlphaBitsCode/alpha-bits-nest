import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
// Import HelmetProvider
import { HelmetProvider } from 'react-helmet-async';

// Define proper helmet context type
interface HelmetServerState {
  helmet: {
    base: { toString(): string };
    bodyAttributes: { toString(): string };
    htmlAttributes: { toString(): string };
    link: { toString(): string };
    meta: { toString(): string };
    noscript: { toString(): string };
    script: { toString(): string };
    style: { toString(): string };
    title: { toString(): string };
    priority: { toString(): string };
  };
}

export async function render(url: string) {
  // Create a properly typed helmet context
  const helmetContext: { helmet?: any } = {};
  
  // Render the app with the helmet provider
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  // The helmet context will now contain all the SEO data collected during rendering
  const { helmet } = helmetContext as HelmetServerState;
  
  // Return the rendered HTML and all helmet data for template injection
  return {
    appHtml: html,
    headTags: {
      title: helmet ? helmet.title.toString() : '',
      meta: helmet ? helmet.meta.toString() : '',
      link: helmet ? helmet.link.toString() : '',
      script: helmet ? helmet.script.toString() : '',
      style: helmet ? helmet.style.toString() : '',
      htmlAttributes: helmet ? helmet.htmlAttributes.toString() : '',
      bodyAttributes: helmet ? helmet.bodyAttributes.toString() : ''
    }
  };
}
