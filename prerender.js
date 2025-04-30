
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes to match App.tsx structure
// This includes all main routes and nested routes
const routesToPrerender = [
  // Base routes
  '/',
  '/products',
  '/services',
  '/experiences',
  '/about',
  '/locations',
  '/contact',
  
  // Product routes
  '/products/mushroom-in-a-box',
  '/products/farm-in-box',
  '/products/alpha-cube',
  '/products/office-home',
  '/products/farm',
  '/products/factory',
  
  // Service routes
  '/services/aiot-product-development',
  '/services/cto-as-a-service',
  '/services/software-development',
  
  // Experience routes
  '/experiences/ao-farm',
  '/experiences/events',
  
  // Legal pages
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  
  // Courses
  '/courses',
  '/khoa-hoc-ai-workflow-automation',
  
  // Blog routes should be dynamically fetched if possible
  '/blog'
  // Blog post pages would be dynamically added if we had access to the posts data
]

;(async () => {
  try {
    for (const url of routesToPrerender) {
      try {
        console.log(`Rendering: ${url}`)
        // Await the async render function - now returns an object with appHtml and headTags
        const renderResult = await render(url)
        const { appHtml, headTags } = renderResult
        
        // Start with the template
        let html = template
        
        // Replace all head placeholders with the corresponding SEO tags
        html = html.replace('<!--head-title-->', headTags.title)
        html = html.replace('<!--head-meta-->', headTags.meta)
        html = html.replace('<!--head-link-->', headTags.link)
        html = html.replace('<!--head-script-->', headTags.script)
        html = html.replace('<!--head-style-->', headTags.style)
        
        // Replace the app HTML placeholder
        html = html.replace('<!--app-html-->', appHtml)

        // Apply HTML and body attributes if they exist
        // For HTML tag attributes
        if (headTags.htmlAttributes && headTags.htmlAttributes.length > 0) {
          html = html.replace('<html lang="en">', `<html ${headTags.htmlAttributes}>`)
        }
        
        // For body tag attributes - need to handle with regex as body tag could be in different places
        if (headTags.bodyAttributes && headTags.bodyAttributes.length > 0) {
          html = html.replace(/<body([^>]*)>/, `<body ${headTags.bodyAttributes}>`)
        }

        const filePath = `dist${url === '/' ? '/index' : url}.html`
        
        // Ensure directory exists before writing file
        const dirPath = path.dirname(toAbsolute(filePath))
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true })
        }
        
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('pre-rendered:', filePath)
      } catch (err) {
        console.error(`Error rendering ${url}:`, err)
      }
    }
  } catch (err) {
    console.error('Prerendering failed:', err)
    process.exit(1)
  }
})()
