import { defineConfig } from "vite";
import HublPostCSSCleaner from "./build/rollup-plugin-hubl-cleaner";
import HublParser from "@spingroup/postcss-hubl/hubl-parse";
import discardDuplicates from "postcss-discard-duplicates";
import nesting from "postcss-nesting";
import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import tailwindcss from "@tailwindcss/postcss";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    HublPostCSSCleaner(),
    tsconfigPaths(),
  ],
  publicDir: "./dist/",
  build: {
    outDir: "./src/unified-theme/assets/dist",
    minify: false,
    rollupOptions: {
      watch: {
        include: ["./src/unified-theme/assets/_hs/css/**/*"],
      },
      input: {
        main: "./src/unified-theme/assets/_hs/css/main.hubl.css",
        tailwindcss: "./src/unified-theme/assets/_hs/css/tailwind.hubl.css",
        caseStudies:
          "./src/unified-theme/assets/_hs/css/templates/case-studies.hubl.css",
        system: "./src/unified-theme/assets/_hs/css/templates/system.hubl.css",
        blog: "./src/unified-theme/assets/_hs/css/templates/blog.hubl.css",
        podcastListing:
          "./src/unified-theme/assets/_hs/css/templates/podcast-listing.hubl.css",
        podcastDetail:
          "./src/unified-theme/assets/_hs/css/templates/podcast-detail.hubl.css",
      },
      output: {
        assetFileNames: "css/[name].[ext]",
      },
    },
  },

  css: {
    postcss: {
      parser: HublParser,
      plugins: [
        postcssImport(),
        tailwindcss(),
        discardDuplicates(),
        nesting(),
        postcssPresetEnv({
          stage: 3,
          features: {
            "custom-properties": false,
          },
        }),
      ],
    },
  },
});
