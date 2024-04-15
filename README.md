# Micro-frontends with React + Vite

This monorepo aims to demonstrate how one can approach implementing **React** and **Vite** project following [micro-frontends](https://micro-frontends.org/) architecture.

## Getting started

Clone project

```console
git clone https://github.com/aaort/microfrontends.git
```

Install dependencies, run this command from the root of the project

```console
pnpm install
```

Run project

```console
pnpm dev
```

This command will run `components` at port `5001` and web app at port `5137`. Now you can visit web app at: `http://localhost:5173/`

## Project structure

Project is managed with [pnpm workspace](https://pnpm.io/workspaces).

`/apps` - contains host/container apps that the end user is going to see.\
`/packages` - contains remotes that must be consumed by host/container apps. In this particular example we have the `components` project that contains components such as `Button`, `Header` and `Footer` and exposes them as remotes.

This approach is made possible with [Webpack's module federation](https://webpack.js.org/concepts/module-federation/) concept. In this project we're using Vite that provides us with a [plugin](https://github.com/originjs/vite-plugin-federation) to make `module federation` possible. I suggest you to go trough the docs for webpack and vite module federation (links provided above) in this exact order to get a better understanding of how project is set up.

## Explanation

We have two main projects here, host and remote. Remote project provides us with a set of components that we intend to use in the host project. Required configurations are located at the `vite.config.ts` files.

First, in the components's vite config file we import `vite-plugin-federation` and pass following properties `name`, `filename`, `exposes` (components that we intend to expose for the host application) and `shared` (packages that are shared between host and remote application). Here is the example from this project

```js
// ./packages/components/vite.config.ts
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Header": "./src/components/Header",
        "./Footer": "./src/components/Footer",
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
});
```

Next, we have to modify the vite config file for our host application that is located in the ./apps/web in a similar manner. pass `name`, `remotes` which is the URL to our remote components appended with `/assets/<filename>`.

```js
// ./apps/web/vite.config.ts
import federation from "@originjs/vite-plugin-federation";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // You only need this snippet if you're planning on deploying your application,
  // locally remote components will always be located at http://localhost:5001/assets/remoteEntry.js
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
```

Those are the essential steps required to utilize module federation and allow sharing components that are hosted remotely at runtime.
