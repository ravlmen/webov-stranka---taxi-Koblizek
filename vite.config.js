import { defineConfig } from 'vite'
import { pages, renderPage } from './src/pages.js'

const base = process.env.GITHUB_PAGES === 'true'
  ? '/webov-stranka---taxi-Koblizek/'
  : '/'
let resolvedBase = base

export default defineConfig({
  base,
  plugins: [{
    name: 'website-pages',
    configResolved(config) {
      resolvedBase = config.base
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html, context) {
        const pathname = new URL(context.originalUrl ?? context.path, 'http://localhost').pathname
        return renderPage(html, pathname, resolvedBase)
      },
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const home = bundle['index.html']
        if (!home || home.type !== 'asset') throw new Error('Missing website index.html')
        for (const path of Object.keys(pages)) {
          this.emitFile({
            type: 'asset',
            fileName: `${path.slice(1)}index.html`,
            source: renderPage(String(home.source), path, resolvedBase),
          })
        }
      },
    },
  }],
})
