import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig (({mode}) => ({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  base: mode === 'production' ? '/cardManager/' : "/",
}))
//  mode === 'production' ? '/cardManager/' : "/"