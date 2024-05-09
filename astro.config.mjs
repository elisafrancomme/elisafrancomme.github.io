import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://elisafrancomme.github.io",
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx()]
});