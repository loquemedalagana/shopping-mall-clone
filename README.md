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

- production releases: `master`
- next release: `develop`
- feature: `feature`
- bugfix: `bugfix`
- release: `release`
- hotfix: `hotfix`

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
