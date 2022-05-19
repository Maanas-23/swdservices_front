import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>DVM Portals</title>`
      )
    }
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), htmlPlugin()],
  base: './',
})
