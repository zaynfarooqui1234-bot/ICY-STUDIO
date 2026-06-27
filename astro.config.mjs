import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import compress from "astro-compress";
import svgr from "vite-plugin-svgr";

import preload from "astro-preload";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
   security: {
    checkOrigin: false,
  },
  integrations: [preload(), compress(), tailwind(), react(),  ],
  vite: {
    plugins: [svgr()],
  },
});
