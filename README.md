# React + TypeScript + Webpack Project Template
<div align="center">
  <img alt="React + TypeScript + Webpack" src="./.github/images/react-typescript-webpack.png" width="900px"/><br/>
  <p>A React project template configured for TypeScript development and bundled with Webpack.</p>

  [React](https://reactjs.org/) | [TypeScript](https://www.typescriptlang.org/) | [Webpack](https://webpack.js.org/)
</div>

## ⚡️ Quick Start

Ensure [Node.js](https://nodejs.org/en/download/) is installed. Version 10.13.0 (LTS) or higher is required.
> **Recommended**: Use a Node version manager like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Dependency installation is done using the `npm install` command from the project root.
## 🙋🏽 Why?

While [Create React App](https://create-react-app.dev/) is a great way to jump start a simple project, it unfortunately abstracts away most of the configuration. This makes it difficult to understand React project configuration for quick customization or required packages for dependency management.

## 🧱 How?

This React template was created from scratch using the bare minimum package dependencies needed to run a React + TypeScript project that is bundled with Webpack and tested with Jest.

Review the [commit history](https://github.com/cloud-city-crafted/react-typescript-webpack-template/commits/main) to see which files were created/edited for each step of the configuration process.

1. [Initialize Project](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/1)
2. [Setup TypeScript](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/2)
3. [Setup React](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/3)
4. [Setup Jest](https://github.com/cloud-city-crafted/react-typescript-webpack-template/pull/4)
5. Setup Webpack

## ⚛️ What?

This project template only uses the dependencies and configurations needed to:

- Create a React Web Application
- Develop React Components using TypeScript (using `.tsx` files)

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

## 🪪 License

This project template is [MIT licensed](https://github.com/cloud-city-crafted/react-typescript-webpack-template/blob/main/LICENSE).