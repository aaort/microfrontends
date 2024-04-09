# React + Vite project following the micro-frontends architecture

This monorepo aims to demonstrate how one can approach implementing **React** and **Vite** following micro-frontends architecture.

## Project structure

Project is managed with [pnpm workspace](https://pnpm.io/workspaces).

`/apps` - contains host/container apps that the end user is going to see.\
`/packages` - contains remotes that must be consumed by host/container apps. In this particular example we have the `components` project that contains components such as `Button`, `Header` and `Footer` and exposes them as remotes.

This approach is made possible with [Webpack's module federation](https://webpack.js.org/concepts/module-federation/) concept. In this project we're using Vite that provides us with a [plugin](https://github.com/originjs/vite-plugin-federation) to implement `module federation`.

## Explanation

I suggest you to go trough the docs for webpack and vite module federation (links provided above) in this exact order to get a better understanding of how project is set up.
