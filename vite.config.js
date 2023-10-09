import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.jsx'),
            name: 'MyLib',

            fileName: "index"
        },
        rollupOptions: {
            external: ['react'],
        }
    }
})
