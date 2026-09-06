import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const projectRoot = import.meta.dirname
const aiCodingDevServer = 'http://127.0.0.1:3031'

const proxyToAiCoding = () => ({
  target: aiCodingDevServer,
  ws: true,
})

export default defineConfig({
  root: resolve(projectRoot, 'portal'),
  server: {
    proxy: {
      '/ai-coding': proxyToAiCoding(),
      '/@server-reactive': proxyToAiCoding(),
      '/@server-ref': proxyToAiCoding(),
      '/__mcp': proxyToAiCoding(),
    },
  },
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
  },
})
