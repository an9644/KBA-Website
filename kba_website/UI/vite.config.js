import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //server configration
  server:{
    port:3000, //set the server to 3000 port
    proxy: {
      "/api": {
        target: "http://api:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,""),
      }
    }
  },

})