This project will be a fully featured React boilerplate with the theme: Old Scholl Game Library.

## Branchs

- master branch: a react-create-app with Eslint (AirBNB codestyle) and Prettier support. Also has .editorconfig and .gitignore files. Contains this README which explains all branchs.

- basic-js branch: this branch is a react-create-app boilerplate from master branch + project structure, layouts, components and routing. Ant Design + Ant Motion for layouting and Enzyme + Sinon for tests are added to the app.

- basic-redux branch: basic-js branch + React Redux added to manage the app state.

- redux-saga branch: basic-redux branch + Redux Saga added to manage side effects.

- hooks branch: redux-saga branch + connected-router-redux + HOOKS FOR EVERY COMPONENT (bye React Classes, hello fully functional SPA) [all tests rewritten]. This version updated React from version 16.8.6 to 16.9.0.

- styled-components branch: hooks branch + code refactoring using styled-components for the styling!

- storybook: styled-components branch + Storybook added for components UI testing

- majestic: storybook branch + majestic added for as UI for Jest

- worker branch: majestic branch + web worker for keeping big scrips off the main thread

- react-testing-library branch: worker branch + react-testing-library replacing enzyme + sinon
