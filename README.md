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

<hr/>

## Project Structure

- This will be available after the release of 1.0

### UI

- All UI components are in `src/components` directory.
- For responsive UI, the devices' sizes are defined in `src/device/devices.js`.

#### Atomic Components

- `Image` component shows `error message` when the image cannot be loaded.
- `Table` component is easier to use, only receiving necessary props: `row, col, data to be shown`.
- `Loading`to show changeable loading spinner depending on its parent element's size.

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
