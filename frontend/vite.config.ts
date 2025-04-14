import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({mode}: {mode: string}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd()) };
  // const CLOUDFRONT_URL = process.env.VITE_CLOUDFRONT_URL
  // console.log(CLOUDFRONT_URL)
  return defineConfig({
    plugins: [react()],
    
    server: {
      port: 3000,
      host: '0.0.0.0',
      // cors: true,
      // proxy: {
      //   '/api': {
      //     target: `${CLOUDFRONT_URL}/ai/recipe`,
      //     changeOrigin: true,
          
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //     secure: false
      //   }
      // }
    },

    
  })
  
}