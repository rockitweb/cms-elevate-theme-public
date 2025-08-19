// vite.config.ts
import { defineConfig } from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/vite/dist/node/index.js";

// build/rollup-plugin-hubl-cleaner/index.js
function HublPostCSSCleaner() {
  return {
    name: "hubl-cleaner",
    // this name will show up in logs and errors
    transform(source, id) {
      return source.replace(/(\/\*\~\|)/g, "").replace(/(\|\~\*\/)/g, "");
    }
  };
}

// vite.config.ts
import HublParser from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/@spingroup/postcss-hubl/hubl-parse.js";
import discardDuplicates from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/postcss-discard-duplicates/src/index.js";
import nesting from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/postcss-nesting/dist/index.mjs";
import postcssPresetEnv from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/postcss-preset-env/dist/index.mjs";
import postcssImport from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/postcss-import/index.js";
import tailwindcss from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/@tailwindcss/postcss/dist/index.mjs";
import tsconfigPaths from "file:///Users/simonturk/Development/Clients/niba/hubspot/cms-elevate-niba-theme/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [HublPostCSSCleaner(), tsconfigPaths()],
  publicDir: "./dist/",
  base: "",
  build: {
    outDir: "./src/unified-theme/assets/dist",
    minify: false,
    rollupOptions: {
      watch: {
        include: ["./src/unified-theme/assets/_hs/css/**/*"]
      },
      input: {
        main: "./src/unified-theme/assets/_hs/css/main.hubl.css",
        tailwindcss: "./src/unified-theme/assets/_hs/css/tailwind.hubl.css",
        fonts: "./src/unified-theme/assets/_hs/css/fonts.hubl.css",
        caseStudies: "./src/unified-theme/assets/_hs/css/templates/case-studies.hubl.css",
        system: "./src/unified-theme/assets/_hs/css/templates/system.hubl.css",
        blog: "./src/unified-theme/assets/_hs/css/templates/blog.hubl.css",
        podcastListing: "./src/unified-theme/assets/_hs/css/templates/podcast-listing.hubl.css",
        podcastDetail: "./src/unified-theme/assets/_hs/css/templates/podcast-detail.hubl.css"
      },
      output: {
        assetFileNames: (assetInfo) => {
          var _a;
          const ext = (_a = assetInfo == null ? void 0 : assetInfo.name) == null ? void 0 : _a.split(".").pop();
          if (!ext)
            return "assets/[name].[ext]";
          if (["woff2", "woff"].includes(ext))
            return "fonts/[name].[ext]";
          if (ext === "css")
            return "css/[name].[ext]";
          return "assets/[name].[ext]";
        }
      }
    }
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
            "custom-properties": false
          }
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcm9sbHVwLXBsdWdpbi1odWJsLWNsZWFuZXIvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2ltb250dXJrL0RldmVsb3BtZW50L0NsaWVudHMvbmliYS9odWJzcG90L2Ntcy1lbGV2YXRlLW5pYmEtdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaW1vbnR1cmsvRGV2ZWxvcG1lbnQvQ2xpZW50cy9uaWJhL2h1YnNwb3QvY21zLWVsZXZhdGUtbmliYS10aGVtZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2ltb250dXJrL0RldmVsb3BtZW50L0NsaWVudHMvbmliYS9odWJzcG90L2Ntcy1lbGV2YXRlLW5pYmEtdGhlbWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IEh1YmxQb3N0Q1NTQ2xlYW5lciBmcm9tIFwiLi9idWlsZC9yb2xsdXAtcGx1Z2luLWh1YmwtY2xlYW5lclwiO1xuaW1wb3J0IEh1YmxQYXJzZXIgZnJvbSBcIkBzcGluZ3JvdXAvcG9zdGNzcy1odWJsL2h1YmwtcGFyc2VcIjtcbmltcG9ydCBkaXNjYXJkRHVwbGljYXRlcyBmcm9tIFwicG9zdGNzcy1kaXNjYXJkLWR1cGxpY2F0ZXNcIjtcbmltcG9ydCBuZXN0aW5nIGZyb20gXCJwb3N0Y3NzLW5lc3RpbmdcIjtcbmltcG9ydCBwb3N0Y3NzUHJlc2V0RW52IGZyb20gXCJwb3N0Y3NzLXByZXNldC1lbnZcIjtcbmltcG9ydCBwb3N0Y3NzSW1wb3J0IGZyb20gXCJwb3N0Y3NzLWltcG9ydFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3MvcG9zdGNzc1wiO1xuXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbSHVibFBvc3RDU1NDbGVhbmVyKCksIHRzY29uZmlnUGF0aHMoKV0sXG4gIHB1YmxpY0RpcjogXCIuL2Rpc3QvXCIsXG4gIGJhc2U6IFwiXCIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL2Rpc3RcIixcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIGluY2x1ZGU6IFtcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvKiovKlwiXSxcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvbWFpbi5odWJsLmNzc1wiLFxuICAgICAgICB0YWlsd2luZGNzczogXCIuL3NyYy91bmlmaWVkLXRoZW1lL2Fzc2V0cy9faHMvY3NzL3RhaWx3aW5kLmh1YmwuY3NzXCIsXG4gICAgICAgIGZvbnRzOiBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvZm9udHMuaHVibC5jc3NcIixcbiAgICAgICAgY2FzZVN0dWRpZXM6XG4gICAgICAgICAgXCIuL3NyYy91bmlmaWVkLXRoZW1lL2Fzc2V0cy9faHMvY3NzL3RlbXBsYXRlcy9jYXNlLXN0dWRpZXMuaHVibC5jc3NcIixcbiAgICAgICAgc3lzdGVtOiBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvdGVtcGxhdGVzL3N5c3RlbS5odWJsLmNzc1wiLFxuICAgICAgICBibG9nOiBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvdGVtcGxhdGVzL2Jsb2cuaHVibC5jc3NcIixcbiAgICAgICAgcG9kY2FzdExpc3Rpbmc6XG4gICAgICAgICAgXCIuL3NyYy91bmlmaWVkLXRoZW1lL2Fzc2V0cy9faHMvY3NzL3RlbXBsYXRlcy9wb2RjYXN0LWxpc3RpbmcuaHVibC5jc3NcIixcbiAgICAgICAgcG9kY2FzdERldGFpbDpcbiAgICAgICAgICBcIi4vc3JjL3VuaWZpZWQtdGhlbWUvYXNzZXRzL19ocy9jc3MvdGVtcGxhdGVzL3BvZGNhc3QtZGV0YWlsLmh1YmwuY3NzXCIsXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXh0ID0gYXNzZXRJbmZvPy5uYW1lPy5zcGxpdChcIi5cIikucG9wKCk7XG4gICAgICAgICAgaWYgKCFleHQpIHJldHVybiBcImFzc2V0cy9bbmFtZV0uW2V4dF1cIjtcbiAgICAgICAgICBpZiAoW1wid29mZjJcIiwgXCJ3b2ZmXCJdLmluY2x1ZGVzKGV4dCkpIHJldHVybiBcImZvbnRzL1tuYW1lXS5bZXh0XVwiO1xuICAgICAgICAgIGlmIChleHQgPT09IFwiY3NzXCIpIHJldHVybiBcImNzcy9bbmFtZV0uW2V4dF1cIjtcbiAgICAgICAgICByZXR1cm4gXCJhc3NldHMvW25hbWVdLltleHRdXCI7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGFyc2VyOiBIdWJsUGFyc2VyLFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBwb3N0Y3NzSW1wb3J0KCksXG4gICAgICAgIHRhaWx3aW5kY3NzKCksXG4gICAgICAgIGRpc2NhcmREdXBsaWNhdGVzKCksXG4gICAgICAgIG5lc3RpbmcoKSxcbiAgICAgICAgcG9zdGNzc1ByZXNldEVudih7XG4gICAgICAgICAgc3RhZ2U6IDMsXG4gICAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIFwiY3VzdG9tLXByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NpbW9udHVyay9EZXZlbG9wbWVudC9DbGllbnRzL25pYmEvaHVic3BvdC9jbXMtZWxldmF0ZS1uaWJhLXRoZW1lL2J1aWxkL3JvbGx1cC1wbHVnaW4taHVibC1jbGVhbmVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2ltb250dXJrL0RldmVsb3BtZW50L0NsaWVudHMvbmliYS9odWJzcG90L2Ntcy1lbGV2YXRlLW5pYmEtdGhlbWUvYnVpbGQvcm9sbHVwLXBsdWdpbi1odWJsLWNsZWFuZXIvaW5kZXguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NpbW9udHVyay9EZXZlbG9wbWVudC9DbGllbnRzL25pYmEvaHVic3BvdC9jbXMtZWxldmF0ZS1uaWJhLXRoZW1lL2J1aWxkL3JvbGx1cC1wbHVnaW4taHVibC1jbGVhbmVyL2luZGV4LmpzXCI7LyoqXG4gKiBBIHJvbGx1cCBwbHVnaW4gdG8gcmVtb3ZlIGNvbW1lbnQgdG9rZW5zIGFkZGVkIGJ5IHBvc3Rjc3MtaHVibC5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3Bpbmdyb3VwL3Bvc3Rjc3MtaHVibFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdWJsUG9zdENTU0NsZWFuZXIgKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdodWJsLWNsZWFuZXInLCAvLyB0aGlzIG5hbWUgd2lsbCBzaG93IHVwIGluIGxvZ3MgYW5kIGVycm9yc1xuICAgIHRyYW5zZm9ybShzb3VyY2UsIGlkKSB7XG4gICAgICAvLyBSZW1vdmUgYWxsIGNvbW1lbnQga2V5cyBmcm9tIHN0YXJ0IGFuZCBlbmRcbiAgICAgIC8vIC8qfnwgYW5kIHx+Ki9cbiAgICAgIHJldHVybiBzb3VyY2UucmVwbGFjZSgvKFxcL1xcKlxcflxcfCkvZywgXCJcIikucmVwbGFjZSgvKFxcfFxcflxcKlxcLykvZywgXCJcIik7XG4gICAgfSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7OztBQ0t4WixTQUFSLHFCQUF1QztBQUM1QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUE7QUFBQSxJQUNOLFVBQVUsUUFBUSxJQUFJO0FBR3BCLGFBQU8sT0FBTyxRQUFRLGVBQWUsRUFBRSxFQUFFLFFBQVEsZUFBZSxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0Y7OztBRFpBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sYUFBYTtBQUNwQixPQUFPLHNCQUFzQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUV4QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDL0MsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDLHlDQUF5QztBQUFBLE1BQ3JEO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxhQUNFO0FBQUEsUUFDRixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixnQkFDRTtBQUFBLFFBQ0YsZUFDRTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFwQ3ZDO0FBcUNVLGdCQUFNLE9BQU0sNENBQVcsU0FBWCxtQkFBaUIsTUFBTSxLQUFLO0FBQ3hDLGNBQUksQ0FBQztBQUFLLG1CQUFPO0FBQ2pCLGNBQUksQ0FBQyxTQUFTLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBRyxtQkFBTztBQUM1QyxjQUFJLFFBQVE7QUFBTyxtQkFBTztBQUMxQixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLGNBQWM7QUFBQSxRQUNkLFlBQVk7QUFBQSxRQUNaLGtCQUFrQjtBQUFBLFFBQ2xCLFFBQVE7QUFBQSxRQUNSLGlCQUFpQjtBQUFBLFVBQ2YsT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFlBQ1IscUJBQXFCO0FBQUEsVUFDdkI7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
