Boilerplate project for learning and testing new React (& aux Tools) with the theme: Old Scholl Game Library.

## Branchs

The branchs are organized in cronological order.

- ***master branch***: a react-create-app with Eslint (AirBNB codestyle) and Prettier support. Also has .editorconfig and .gitignore files. Contains this README which explains all branchs.

- ***basic-js branch***: this branch is a react-create-app boilerplate from master branch + project structure, layouts, components and routing. Ant Design + Ant Motion for layouting and Enzyme + Sinon for tests are added to the app.

- ***basic-redux branch***: basic-js branch + React Redux added to manage the app state.

- ***redux-saga branch***: basic-redux branch + Redux Saga added to manage side effects.

- ***hooks branch***: redux-saga branch + connected-router-redux + ***HOOKS FOR EVERY COMPONENT*** (bye React Classes, hello fully functional SPA) [all tests rewritten + tests for Reducers and Sagas]. This version updated React from version 16.8.6 to 16.9.0.

- ***majestic branch***: hooks branch + PROCESS ENVS + majestic added for as UI for Jest

- ***react-testing-library branch***: majestic branch + react-testing-library replacing enzyme

- ***storybook branch***: react-testing-library branch + Storybook added for components UI testing

- ***styled-components branch***: storybook branch + code refactoring using styled-components for the styling!

- ***worker branch***: styled-components branch + web worker for keeping big scrips off the main thread
