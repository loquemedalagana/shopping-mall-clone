# An shopping mall clone without Typescript

## Basic Commands

### to start the app

```bash
yarn start
```

### to run e2e test based on UI

- before the app should be started

```bash
yarn start
yarn cypress
```

### to run functional test

```bash
yarn test
```

# to build

```bash
yarn build
```

### # git flow

```bash
git flow init
```

- release: `master`
- develop: `develop`
- features: `feature/*`
- All the `feature branches` should be merged into `develop` before release.

<hr />

## Routes

`/products`

- to show product list

`/:productId`

- to show product detail page

<hr/>

## Deployment

- This app is deployed automatically in `netlify` when `master` branch is updated.
- [current version is here](https://frolicking-moonbeam-50949b.netlify.app/products)

### release history

- [set routes and wrote breadcrumbs](https://github.com/loquemedalagana/shopping-mall-spa/pull/3)
- [developed product list](https://github.com/loquemedalagana/shopping-mall-spa/commit/bf36082f813b8d3b3997e2888e3862b79c728916)
- [developed search UI](https://github.com/loquemedalagana/shopping-mall-spa/commit/4463579b454d859ff3428f658905ef510ed22e22)
- [add function to search input based on brand](https://github.com/loquemedalagana/shopping-mall-spa/commit/b803cb9f4db869ef7fb1fb16d219274085fb249a)
- [add product detail UI](https://github.com/loquemedalagana/shopping-mall-spa/commit/deb561c6d91354c294097a9165350b40eef529b6)
- [fix malfunctioned search functions](https://github.com/loquemedalagana/shopping-mall-spa/commit/efffdf065e2fd78b5f9fc6a330b00eed6feb28a6)

### Test

- All the tests will be conducted automatically through `github-action`.
- `saga`, `reducers` are tested via `Jest`.
- `Unit tests` are conducted by `Jest`.
- `UI` and `e2e` tests are conducted by `cypress`.
- [All the automated test logs are available in this link](https://github.com/loquemedalagana/shopping-mall-spa/actions).

<hr/>

## Project Structure

- This will be available after the release of 1.0

### UI

- All UI components are in `src/components` directory.
- For responsive UI, the devices' sizes are defined in `src/device/devices.js`.

#### Atomic Components

- `CardImage`, `PageImage` component shows `error message` when the image cannot be loaded.
- `Table` component is easier to use, only receiving necessary props: `row, col, data to be shown`.

#### Molecule Components

#### Organism Components

- `Header` marked up with `<header/>` tag.
- `Footer` marked up with `<footer/>` tag.
- `Error` to show error.

#### Template Component

- `RootLayout` in the `src/routes` directory.

#### Page Components

- All components in the `src/components/**Page.jsx` format

#### Container Components

- The container components connect business logic to UI components.

<hr />

### Business logics

- All component files in `src/containers` directory are for connecting business logics to UI components.
- All input control hooks are in `src/hooks`: search and add to cart based on options.

<hr />

### Retrospection

It is the first time for me to apply TDD, although I already had experiences of testing. The main advantage of TDD is reducing the mistakes, whereas the main disadvantage of this method is taking too much time.
