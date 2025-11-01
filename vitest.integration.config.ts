import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    name: "integration",
    environment: "node",
    include: ["**/*.integration.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/.next/**"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
