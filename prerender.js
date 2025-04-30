
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
  for (const url of routesToPrerender) {
    console.log(`Rendering: ${url}`)
    const appHtml = render(url)
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    
    // Ensure directory exists before writing file
    const dirPath = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
