import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import helmetPkg from 'react-helmet-async';
const { Helmet, HelmetProvider } = helmetPkg;

export function render(url: string) {
  const helmetContext = {};
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  
  return html;
}
