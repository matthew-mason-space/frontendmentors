import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: false,
  devToolbar: {
    enabled: true,
    placement: "bottom-left",
  },
  output: "static",
  integrations: [],
  trailingSlash: "always",
});
