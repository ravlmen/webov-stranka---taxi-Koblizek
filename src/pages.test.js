import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { pages, renderPage } from './pages.js'

const template = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const base = process.env.GITHUB_PAGES === 'true' ? '/webov-stranka---taxi-Koblizek/' : '/'
const basePrefix = base === '/' ? '' : base.slice(0, -1)

test('all eight subpages render unique titles, descriptions and main headings', () => {
  assert.equal(Object.keys(pages).length, 8)
  for (const [path, page] of Object.entries(pages)) {
    const html = renderPage(template, path)
    assert.ok(html.includes(`<title>${page.title} — Taxi Koblížek</title>`), path)
    assert.ok(html.includes(`<h1>${page.title}</h1>`), path)
    assert.ok(html.includes(`content="${page.intro}"`), path)
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, path)
    assert.ok(!html.includes('id="video-file"'), path)
    assert.equal(renderPage(template, path.slice(0, -1)), html, path)
  }
})

test('GitHub Pages base prefixes local links without changing external links', () => {
  const html = renderPage(template, '/o-nas/', '/webov-stranka---taxi-Koblizek/')
  assert.ok(html.includes('href="/webov-stranka---taxi-Koblizek/o-nas/" aria-current="page"'))
  assert.ok(html.includes('href="/webov-stranka---taxi-Koblizek/#pribeh"'))
  assert.ok(html.includes('href="https://app.taxikoblizek.cz"'))
  assert.ok(!html.includes('/webov-stranka---taxi-Koblizek/webov-stranka---taxi-Koblizek/'))
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="(\/[^"]*)"/g)) {
    assert.ok(href === '/webov-stranka---taxi-Koblizek'
      || href.startsWith('/webov-stranka---taxi-Koblizek/'), href)
  }
})

test('all page links resolve and each document has an active navigation link', () => {
  for (const path of ['/', ...Object.keys(pages)]) {
    const html = renderPage(template, path, base)
    assert.ok(html.includes(`href="${basePrefix}${path}" aria-current="page"`), path)
    assert.ok(!html.includes('href="#"'), path)
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      const localHref = href.startsWith(basePrefix + '/') ? href.slice(basePrefix.length) : href
      if (!localHref.startsWith('/') || localHref.startsWith('/#') || localHref.includes('.')) continue
      assert.ok(localHref === '/' || pages[localHref], `${path}: ${href}`)
    }
  }
})

test('built subpages exist as independent HTML with valid local assets', () => {
  for (const path of ['/', ...Object.keys(pages)]) {
    const file = new URL(`../dist${path}index.html`, import.meta.url)
    assert.ok(existsSync(file), path)
    const html = readFileSync(file, 'utf8')
    for (const [, asset] of html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g)) {
      const distAsset = basePrefix && asset.startsWith(basePrefix) ? asset.slice(basePrefix.length) : asset
      assert.ok(existsSync(new URL(`../dist${distAsset}`, import.meta.url)), asset)
    }
    assert.ok(existsSync(new URL('../dist/logo-taxi-koblizek.png', import.meta.url)))
    if (pages[path]) assert.ok(html.includes(`<h1>${pages[path].title}</h1>`), path)
  }
})

test('homepage includes the video and a separate photo gallery in both supported builds', () => {
  const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')
  assert.ok(!html.includes(`poster="${basePrefix}/taxi-koblizek-auta.webp"`))
  assert.ok(html.includes(`src="${basePrefix}/taxi-koblizek-auta.webp"`))
  assert.ok(html.includes('class="photo-gallery"'))
  assert.ok(html.includes(`src="${basePrefix}/taxi-koblizek-video.mp4"`))
  assert.ok(html.includes(`href="${basePrefix}/taxi-koblizek-video.mp4"`))
  assert.ok(html.includes('aria-label="Video Taxi Koblížek"'))
  assert.ok(existsSync(new URL('../dist/taxi-koblizek-auta.webp', import.meta.url)))
  assert.ok(existsSync(new URL('../dist/taxi-koblizek-video.mp4', import.meta.url)))
})
