import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig({
  plugins: [
    ...mochaPlugins(process.env as any),
    react()
  ],

  server: {
    allowedHosts: true,
  },

  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 5000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Base para funcionar em qualquer domínio (Vercel, custom domain, etc)
  base: "./"
});
