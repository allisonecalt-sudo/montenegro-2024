import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'node:path';

// HTML cache-busting: GitHub Pages serves HTML with an edge cache that can hold
// stale markup after rapid re-deploys. Vite hashes JS/CSS already; this injects
// no-cache meta tags into the HTML at build time so a fresh deploy is always
// picked up. (Same defense used on the austria-2026 site.)
function htmlCacheBust(buildId: string): Plugin {
  const metaBlock = `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="x-build-id" content="${buildId}" />`;
  return {
    name: 'html-cache-bust',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace(/(<meta charset="UTF-8" \/>)/i, `$1\n    ${metaBlock}`);
      },
    },
  };
}

// GitHub Pages serves at /montenegro-2024/ — base must match the repo name.
// Local dev uses base "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/montenegro-2024/' : '/',
  plugins: [htmlCacheBust(new Date().toISOString())],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 5173,
  },
}));
