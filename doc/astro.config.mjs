import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libraryEntry = path.resolve(__dirname, "../src/index.ts");

export default defineConfig({
  site: "https://react-awesome-loaders.netlify.app",
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      dedupe: ["react", "react-dom"],
      alias: {
        "react-awesome-loaders": libraryEntry,
      },
    },
    optimizeDeps: {
      include: [
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom",
        "react-dom/client",
      ],
      holdUntilCrawlEnd: true,
    },
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
  integrations: [
    react(),
    starlight({
      title: "React Awesome Loaders",
      description:
        "High quality, super responsive and completely customisable loading animations for React.",
      logo: {
        src: "./src/assets/logo-nav-light.svg",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ashutosh1919/react-awesome-loaders",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Getting Started", slug: "getting-started" },
            { label: "Motivation", slug: "motivation" },
          ],
        },
        {
          label: "Loaders",
          items: [{ autogenerate: { directory: "loaders" } }],
        },
        {
          label: "More",
          items: [
            { label: "About Creator", slug: "about-creator" },
            { label: "Contributing", slug: "contributing" },
            { label: "Appreciate", slug: "appreciate" },
            { label: "References", slug: "references" },
          ],
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap",
          },
        },
      ],
    }),
  ],
});
