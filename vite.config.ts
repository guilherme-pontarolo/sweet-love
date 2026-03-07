import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import qrcode from 'qrcode-terminal'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'qrcode-plugin',
        configureServer(server) {
          server.httpServer?.once('listening', () => {
            const address = server.httpServer?.address()
            let port: number

            if (typeof address === 'string' || address === null || address === undefined) {
              port = server.config.server.port
            } else {
              port = address.port
            }

            const localUrl = env.VITE_PUBLIC_URL

            qrcode.generate(localUrl, { small: true }, (qrcode) => {
              console.log('\nScan the QR code to open the app:\n')
              console.log(qrcode)
              console.log(`\nOr open in your browser: ${localUrl}\n`)
            } )
          })
        }
      }
    ],
    server: {
      allowedHosts: ['flauntier-vivan-uninert.ngrok-free.dev', 'localhost']
    }
  }
})
