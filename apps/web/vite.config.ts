import federation from "@originjs/vite-plugin-federation";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const componentsURL =
    env.NODE_ENV === "production"
      ? "https://microfrontends-components.vercel.app/assets/remoteEntry.js"
      : "http://localhost:5001/assets/remoteEntry.js";

  return {
    plugins: [
      react(),
      federation({
        name: "web",
        remotes: {
          components: componentsURL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
