import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".lovableproject.com"],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
    // Force CommonJS dependencies that don't support ESM
    esbuildOptions: {
      mainFields: ['module', 'main']
    }
  },
  ssr: {
    // Ensure these CommonJS packages work in SSR
    noExternal: ['react-helmet-async']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}));
