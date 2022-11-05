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
- hotfix: `hotfix/*`
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
- [current version is here](https://frolicking-moonbeam-50949b.netlify.app)

### release history

- [set routes and wrote breadcrumbs](https://github.com/loquemedalagana/shopping-mall-clone/pull/3)
- [developed product list](https://github.com/loquemedalagana/shopping-mall-clone/commit/bf36082f813b8d3b3997e2888e3862b79c728916)
- [developed search UI](https://github.com/loquemedalagana/shopping-mall-clone/commit/4463579b454d859ff3428f658905ef510ed22e22)
- [add function to search input based on brand](https://github.com/loquemedalagana/shopping-mall-clone/commit/b803cb9f4db869ef7fb1fb16d219274085fb249a)
- [add product detail UI](https://github.com/loquemedalagana/shopping-mall-clone/commit/deb561c6d91354c294097a9165350b40eef529b6)
- [fix malfunctioned search functions](https://github.com/loquemedalagana/shopping-mall-clone/commit/efffdf065e2fd78b5f9fc6a330b00eed6feb28a6)
- [show product count](https://github.com/loquemedalagana/shopping-mall-clone/commit/5846d0ba78a9d20ac009518b38d00bb3888ea012)
- [add search based on model](https://github.com/loquemedalagana/shopping-mall-clone/pull/14/files)


<hr />

### Main features

#### Load Data - `session storage`

#### Search

#### Add to cart - `local storage`


<hr />

### Test

- All features are developed in `TDD`, releasing functional codes and testing codes at the same time.
- All the tests will be conducted automatically through `github-action`.
- `saga`, `reducers`, `models` are tested via `Jest`.
- `UI` and `e2e` tests are conducted by `cypress`.
- [All the automated test logs are available in this link](https://github.com/loquemedalagana/shopping-mall-clone/actions).

<hr/>

## Project Structure

- This will be available after the release of 1.0

### UI

- All UI components are in `src/components` directory.
- For responsive UI, the devices' sizes are defined in `src/device/devices.js`.

#### Atomic Components

- Components in `src/components/image` show `error message` when the image cannot be loaded.
- `Table` component is easier to use, only receiving necessary props: `row, col, data to be shown`.
- Components in `src/components/inputs` -> Input elements
- Components in `src/components/loading` -> Loading spinners
- `src/components/header/LinkRouter` -> Link components for the `Breadcrumbs`.

#### Molecule Components

- `src/components/header/BreadCrumbs`
- `src/components/header/CartCount`
- `src/components/header/ProductDetailActions`
- `src/components/product-list/ProductListItem`
- `src/components/search/SearchSection`
- `src/components/error/ErrorElement`

#### Organism Components

- `Header` marked up with `<header/>` tag.
- `Footer` marked up with `<footer/>` tag.
- `ErrorPage` to show error.

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

### State Management

#### App

#### ProductList

#### ProductDetail

#### Cart

- 백앤드에서 토큰을 내려 줘야 accumulated된 값을 저장할 수 있는데, 그게 아니라서 어쩔 수 없이... 로컬스토리지를 이용, withcridential true.. cookie value [Link is here](https://github.com/loquemedalagana/shopping-mall-clone/blob/develop/src/stores/cartStore.js)

<hr />

### 남은 기능

- app saga에서 만료된 데이터 지우기
- 정렬??

### Retrospection

It is the first time for me to apply TDD, although I already had experiences of testing. The main advantage of TDD is reducing the mistakes, whereas the main disadvantage of this method is taking too much time.
