import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Generate build timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        id: path.resolve(__dirname, 'id/index.html')
      },
      output: {
        // Add content hash to all file names
        entryFileNames: `assets/[name]-${timestamp}-[hash].js`,
        chunkFileNames: `assets/[name]-${timestamp}-[hash].js`,
        assetFileNames: `assets/[name]-${timestamp}-[hash].[ext]`
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false,
      allow: ['..']
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}));
