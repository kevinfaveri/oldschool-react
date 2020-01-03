[![CircleCI](https://circleci.com/gh/kevinfaguiar/oldschool-react/tree/mobile.svg?style=svg)](https://circleci.com/gh/kevinfaguiar/oldschool-react/tree/mobile)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cc695692-028c-4246-8bca-ba9a5c8164aa/deploy-status)](https://app.netlify.com/sites/oldschool-react/deploys)

[![codecov](https://codecov.io/gh/kevinfaguiar/oldschool-react/branch/mobile/graph/badge.svg)](https://codecov.io/gh/kevinfaguiar/oldschool-react)
[![Performance score: 92/100](https://lighthouse-badge.appspot.com/?score=92&category=Performance)](https://github.com/ebidel/lighthouse-badge)


# Old School Game Library

![https://i.imgur.com/Vf1Tydi.png](https://i.imgur.com/Vf1Tydi.png)

Boilerplate project for learning React (& its main libraries commonly used) with the theme: Old School Game Library.

## Branchs

The branchs are organized in cronological order.

- 👶 ***master branch***: a react-create-app with Eslint (AirBNB codestyle) and Prettier support. Also has .editorconfig and .gitignore files. Contains this README which explains all branchs.

- #️⃣ ***basic-js branch***: this branch is a react-create-app boilerplate from master branch + project structure, layouts, components and routing. Ant Design + Ant Motion for layouting and Enzyme + Sinon for tests are added to the app.

- ✨ ***basic-redux branch***: basic-js branch + React Redux added to manage the app state.

- 🌐 ***redux-saga branch***: basic-redux branch + Redux Saga added to manage side effects.

- 🎣 ***hooks branch***: redux-saga branch + connected-router-redux + ***HOOKS FOR EVERY COMPONENT*** (bye React Classes, hello fully functional SPA) [all tests rewritten + tests for Reducers and Sagas]. This version updated React from version 16.8.6 to 16.9.0.

- ⚡ ***majestic branch***: hooks branch + PROCESS ENVS + majestic added as a UI for Jest

- 🦑 ***react-testing-library branch***: majestic branch + react-testing-library replacing enzyme

- 📖 ***storybook branch***: react-testing-library branch + Storybook added for UX testing components

- 💅 ***styled-components branch***: storybook branch + code refactoring using styled-components for the styling

- 👷 ***worker branch***: styled-components branch + web worker for keeping the big scripts off the main thread

- 📱 ***mobile branch***: worker branch + partial mobile support and some tests fixes

## DEMO

The demo (***which is based in the mobile branch***) is available here: https://oldschool-react.netlify.com

## Support me
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E11BKWW)

#### All games appearing in this app have their rights reserved to their respective companies. This app is just a concept aimed at applying React and its main libraries commonly used in a real project.
