# GitHub

Multi step form that guides the user through checkout process and collects data using GitHub's API.

URL: https://github-buddy.herokuapp.com/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run unit
```

### Run unit tests on watch mode
```
npm run watch:unit
```

### Run E2E tests
```
npm run e2e
```

## Tech Stack

* Vue 3
* Vue Router
* Pinia
* TypeScript
* Jest
* Cypress
* Tailwind CSS
* SCSS
* Semantic HTML
* Vee-validate & Yup
* Axios
* Webpack

## Description

Vue 3's Composition API allows to directly add the setup attribute to the script tag to expose anything we want to the template in a faster and easier way. More info: https://learnvue.co/2021/05/explaining-the-new-script-setup-type-in-vue-3-major-takeaways-from-the-rfc/#a-rundown-of-script-setup

The structure of the project is:
* Layout: Header & Footer.
* Steps: Introduction, FormOne, FormTwo and Navigation which is a shared child component of the previous 3.
* User: GitHubData & UserData.

Pinia is now the recommended library for state management in Vue 3 since it features many benefits and improvements compared to Vuex 4. Pinia provides a very easy to digest documentation in order to migrate existing Vuex stores to Pinia with clear benefits highlighted. More info: https://pinia.vuejs.org/introduction.html#comparison-with-vuex-3-x-4-x

Vue Router makes it easy to go back and forth with the multi step form by using the browser's back and next buttons.

GitHub API consumption is handled through a service with the usage of Axios: github.service.ts.

Vee-validate & Yup libraries allow to validate every field of the forms and provide clear errors to the user. Every step is correctly validated before the Next/Finish button is enabled.

If username exists the GitHub data panel will be shown in the final view. Otherwise a text stating username not found will be shown.

## Build Version

0.1.0

## License

The MIT License (MIT)

## About Me

Kevin Martínez Montero

Senior Front End Engineer
