# React + TypeScript + Webpack Project Template
<div align="center">
  <img alt="React + TypeScript + Webpack" src="./.github/images/react-typescript-webpack.png" width="900px"/><br/>
  <p>A React project template configured for TypeScript development and bundled with Webpack.</p>

  [React](https://reactjs.org/) | [TypeScript](https://www.typescriptlang.org/) | [Webpack](https://webpack.js.org/)
</div>

## ⚡️ Quick Start

Ensure [Node.js](https://nodejs.org/en/download/) is installed. Version 10.13.0 (LTS) or higher is required.

> **Recommended**: Use a Node version manager like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Dependency installation is managed via `npm`. Once cloned, you can install dependencies from the project root:

```shell
npm install
```

Once dependencies are installed, you can run the React local development server on port `8080`:

```shell
npm start
```

To test components, you can run all Jest suites:

```shell
npm test
```

And boom! You're ready to create a new React application with TypeScript! 🎉

## 🙋🏽 Why?

While [Create React App](https://create-react-app.dev/) is a great way to jump start a simple project, it unfortunately abstracts away most of the configuration. This makes it difficult to understand React project configuration for quick customization or required packages for dependency management.

## 🧱 How?

This React template was created from scratch using the bare minimum package dependencies needed to run a React + TypeScript project that is bundled with Webpack and tested with Jest.

Review the [pull request history](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pulls?q=is%3Apr+sort%3Acreated-asc) to see which files were created/edited for each step of the configuration process.

1. [Initialize Project](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/1)
2. [Setup TypeScript](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/2)
3. [Setup React](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/3)
4. [Setup Jest](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/4)
5. [Setup Webpack](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/5)
6. (Optional) [Setup Tailwind CSS](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/6)

You can also find more detailed steps in the [How to Setup a React App with TypeScript + Webpack from Scratch](https://dev.to/thelandolorien/how-to-setup-a-react-app-with-typescript-webpack-from-scratch-19cd) post on [DEV](https://dev.to/).

## ⚛️ What?

This project template only uses the dependencies and configurations needed to:

- Create a React Web Application
- Develop React Components using TypeScript (using `.tsx` files)
- Test React Components using Jest
- Bundle a React Web Application for Production
- Serve a React Web Application locally with automatic reloads on save
- (Optional) Build custom design systems using Tailwind CSS utility classes

The final state is a React app equivalent to the starting point of [Create React App](https://create-react-app.dev/).

### 🛠 Tooling
- [React](https://reactjs.org): An open source JavaScript library for building UIs
  - [react](https://www.npmjs.com/package/react): Core React library
  - [@types/react](https://www.npmjs.com/package/@types/react): Type definitions for `React`
  - [react-dom](https://www.npmjs.com/package/react-dom): Renders React to DOM
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Type definitions for `ReactDOM`
- [TypeScript](https://www.typescriptlang.org/): A strongly typed language built on top of JavaScript.
  - [typescript](https://www.npmjs.com/package/typescript): Core TypeScript programming language
  - [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution engine for Node.js
  - [@types/node](https://www.npmjs.com/package/@types/node): Type definitions for Node.js
- [Jest](https://jestjs.io/): A JavaScript testing framework
  - [jest](https://www.npmjs.com/package/jest): Core Jest library
  - [@types/jest](https://www.npmjs.com/package/@types/jest): TypeScript definitions for `jest`
  - [ts-jest](https://www.npmjs.com/package/ts-jest): A Jest transformer for TypeScript
  - [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom): Simulates a DOM environment during jest tests (See: [Jest DOM Manipulation Guide](https://jestjs.io/docs/tutorial-jquery))
  - [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): Jest matchers (e.g. `toHaveClass`, `toBeChecked`) to test the state of the DOM
  - [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): React DOM testing utilities (e.g. `.queryByText`, `.getByRole`)
- [webpack](https://webpack.js.org/): An extensible static module bundler for JavaScript applications.
  - [webpack](https://www.npmjs.com/package/webpack): Core webpack bundler
  - [webpack-cli](https://www.npmjs.com/package/webpack-cli): CLI tooling for webpack (required for `npm` scripts that call `webpack`)
  - [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server): Development server with live reloading
  - [Loaders](https://webpack.js.org/loaders/)
    - [ts-loader](https://www.npmjs.com/package/ts-loader): Loads TypeScript files when bundling
    - [css-loader](https://www.npmjs.com/package/css-loader): Interprets and resolves `@import` and `url()` in CSS files when bundling
    - [style-loader](https://www.npmjs.com/package/style-loader): Injects CSS into the DOM when bundling
    - (Optional) [postcss-loader](https://www.npmjs.com/package/postcss-loader): Processes CSS with PostCSS
  - [Plugins](https://webpack.js.org/plugins/)
    - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin): Generates HTML files when bundling
    - [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin): Copies files to output directory when bundling
    - [webpack-merge](https://www.npmjs.com/package/webpack-merge): Merges webpack configurations (used for copying common configurations for multiple environments)
- (Optional) [Tailwind CSS](https://tailwindcss.com): A CSS framework with pre-built utility styling classes (e.g. `text-center`)
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss): Core Tailwind CSS framework
  - [@types/tailwindcss](https://www.npmjs.com/package/@types/tailwindcss): TypeScript definitions for `tailwindcss`
- (Optional) [PostCSS](https://postcss.org/): A CSS transformer for JavaScript
    - [postcss](https://www.npmjs.com/package/postcss): Core PostCSS tool
    - [Plugins](https://www.postcss.parts/)
      - [autoprefixer](https://www.npmjs.com/package/autoprefixer): Adds vendor prefixes to CSS rules


### 📜 Development Scripts

Initial development scripts are available to local development and testing. You can find these in the `scripts` attribute in [package.json](./package.json).

| Command                 | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `npm install`           | Install all dependent application packages                                             |
| `npm start`             | Start a local development web server at http://localhost:8080 using webpack-dev-server |
| `npm test`              | Run the full test suite using Jest                                                     |
| `npm run build`         | Bundle application for Production using webpack                                        |
| `npm run test:watch`    | Watch files for changes and rerun tests related to changed files                       |
| `npm run test:coverage` | Generate and display a test coverage report                                            |

## 🪪 License

This project template is [MIT licensed](https://github.com/cloud-city-crafted/react-typescript-webpack-template/blob/main/LICENSE).