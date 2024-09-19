import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
  ],
  server: {
    port: 3000,
  },
});
