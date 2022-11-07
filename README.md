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

### to build

```bash
yarn build
```

### git flow

```bash
git flow init
```

- release: `master`
- develop: `develop`
- features: `feature/*`
- hotfix: `hotfix/*`
- All the `feature branches` should be merged into `develop` before release.

<hr />

## Routes [codes](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/routes)

`/`

- redirect to `products`
- RESET search inputs

`/products`

- to show product list
- DO NOT reset search inputs

`/:productId`

- to show product detail page

`/error`

- redirected route when an error occurs

<hr/>

## Deployment

- This app is deployed **automatically** in `netlify` when `master` branch is updated.
- [current version is here](https://frolicking-moonbeam-50949b.netlify.app)

### release history

- [set routes and wrote breadcrumbs](https://github.com/loquemedalagana/shopping-mall-clone/pull/3)
- [developed product list](https://github.com/loquemedalagana/shopping-mall-clone/commit/bf36082f813b8d3b3997e2888e3862b79c728916)
- [developed search UI](https://github.com/loquemedalagana/shopping-mall-clone/commit/4463579b454d859ff3428f658905ef510ed22e22)
- [add function to search input based on brand](https://github.com/loquemedalagana/shopping-mall-clone/commit/b803cb9f4db869ef7fb1fb16d219274085fb249a)
- [add product detail UI](https://github.com/loquemedalagana/shopping-mall-clone/commit/deb561c6d91354c294097a9165350b40eef529b6)
- [fix malfunctioned search functions](https://github.com/loquemedalagana/shopping-mall-clone/commit/efffdf065e2fd78b5f9fc6a330b00eed6feb28a6)
- [show product count](https://github.com/loquemedalagana/shopping-mall-clone/commit/5846d0ba78a9d20ac009518b38d00bb3888ea012)
- [add search based on model](https://github.com/loquemedalagana/shopping-mall-clone/pull/16/files)
- [add search input reset feature](https://github.com/loquemedalagana/shopping-mall-clone/pull/17/files)
- [incorporate storage management codes into persistent store](https://github.com/loquemedalagana/shopping-mall-clone/pull/25)
- [add cache management](https://github.com/loquemedalagana/shopping-mall-clone/pull/27)

<hr />

### Main features

#### Load Data

- All fetched data, `product list` and `product detail` are cached in `App State` using `Session Storage`.

#### Search

- All search options like `brand`, `model name`, `price` will be shown.
- When inputs are changed, the search result will be shown.
- Every search input is autocompleted.
- To reset search input, `Home` in the `breadcrumbs` in the `header` should be clicked. [code](https://github.com/loquemedalagana/shopping-mall-clone/blob/develop/src/containers/LandingContainer.jsx)

#### Add to cart - `local storage`

- `Add to cart` feature in the `product detail page`, and the count in the cart is always shown in the header.

<hr />

### Test

- All features are developed in `TDD`, releasing functional codes and testing codes at the same time.
- All the tests will be conducted automatically through `github-action`.
- `saga`, `reducers`, `models` are tested via `Jest`.
- `UI` and `e2e` tests are conducted by `cypress`.
- [All the automated test logs are available in this link](https://github.com/loquemedalagana/shopping-mall-clone/actions).
- [unit, functional test codes link using jest](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/tests)
- [e2e test codes link using cypress](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/cypress/e2e)

<hr/>

## Project Structure

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
  - The position of this component is controlled by `throttle` for optimization. [code](https://github.com/loquemedalagana/shopping-mall-clone/blob/develop/src/components/search/SearchSection.jsx#L40)
- `src/components/error/ErrorElement`
  - To show partial error: eg. `search fail state`.

#### Organism Components

- `Header` marked up with `<header/>` tag.
- `Footer` marked up with `<footer/>` tag.
- `ErrorPage` to show error.

#### Template Component

- `RootLayout` in the `src/routes` directory.

#### Page Components

- All components in the `src/components/**Page.jsx` format

#### Container Components `src/containers` [code link](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/containers)

- The container components connect business logic to UI components.

#### Model Classes `src/models` [code link](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/models)

- `itemNamesMapp` is for `UI` converting `keys` into `spanish matched terms`.
- `ProductCore` is for `item` for `products`.
- `ProductListData` is for `fetched product list data`, `fetched time`, `checking is expired method`.
- `ProductDetail` is for `product detail data` to be shown in `product detail page`.
- `ProductDetailData` is to save `product detail data` and `fetched time`, `checking is expired method`.

<hr />

### Business logics

- All component files in `src/containers` directory are for connecting business logics to UI components.
- All input control hooks are in `src/hooks`: search and add to cart based on options.

#### Custom Hooks `src/hooks` [code link](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/hooks)

- `useAddProductController`
  - to control `select option input` to be in `request body` in the `POST request`.
  - to dispatch `POST request action`.
- `useSearchController`
  - to control `all inputs` related with `search` feature: `brand`, `model`, `price range`.
  - to communicate `UI state` with `central state`.
  - to show `error state` changing `input UI color` when the inputs are invalid.

### State Management

> #### code links
>
> [sagas, actions](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/actions)
>
> - [tests](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/tests/sagas)
>
> [stores, reducers, provider](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/stores)
>
> - [tests](https://github.com/loquemedalagana/shopping-mall-clone/tree/develop/src/tests/reducers)

#### App - `Persistent store` using `Session Storage`

- Every fetched data is saved in the app state.
- In the `app saga`, the cached data will be deleted after 1 hour.

#### ProductList

- Unlike `App State`, the `data` in this state is to be shown in `UI`.
- Applied `pagination` using `infinite scroll` using `page`, `isReachedEnd` property.
- Search inputs will be saved in `searchKeyword` property.
- `isUpdating` property resets `page` and `data` to show `search results`.

#### ProductDetail

- This state is relatively simple unlike other states.
- In the saga, data is loaded from `App State`, if the data doesn't exist, the fetching function will be called.

#### Cart - `Persistent store` using `Local Storage`

- The total count of cart is saved in the persistent store using `local storage`.
- After receiving the response of `/api/cart`, the data is applied in the reducer.

#### The storage test is conducted in `cypress`, [code link is here](https://github.com/loquemedalagana/shopping-mall-clone/blob/develop/cypress/e2e/app.spec.cy.js)

<hr />

### Retrospection

> It is the first time for me to apply `TDD`, although I already had experiences of testing. The main advantage of `TDD` is reducing the mistakes, whereas the main disadvantage of this method is taking too much time.

> Fue primera vez aplicar `TDD`, aunque ya tenía experiencia de pruebas. En mi opinión, la mejor inconveniente es tardar mucho tiempo; en cambio, la mejor ventana es prohibir errores que no se pueda tener en cuenta.

> Because it was not allowed using `typescript` in this project, I need to understand the difference between `ES5` and `ES6` deeply. In addition, I used `PropTypes` library alternatively, and `prepareAction` function when calling `createAction`, a `built-in` function in `redux`.

> Como usar `typescript` estaba prohibido, tenía que tener la diferencia entre `ES5` y `ES6`en cuenta profundamente. Además, utilicé `PropTypes` alternativamente, y `prepareAction` función al llamar `createAction`, una `built-in` función de `redux`.
