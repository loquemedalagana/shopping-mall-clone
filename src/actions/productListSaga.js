import { all, fork, call, put, select, throttle, debounce, takeLatest } from 'redux-saga/effects';

import * as appActions from 'src/actions/appActions';
import * as productListActions from 'src/actions/productListActions';
import ProductListData from 'src/models/ProductListData';
import { restApiProductList } from 'src/http/api';
import { selectAppState } from 'src/stores/appStore';
import { PRODUCTS_COUNT__PER_PAGE, selectProductListState } from 'src/stores/productListStore';
import { isTest } from 'src/env';

export const getFilterDataByPrice = (productList, { max: maxPrice, min: minPrice }) => {
  return productList.filter(productData => productData.price >= minPrice && productData.price <= maxPrice);
};

export function* setSearchInputError() {
  yield takeLatest(productListActions.SET__SEARCH_INPUT_ERROR, productListActions.setSearchInputError);
}

export function* loadProductList() {
  const appState = yield select(selectAppState);
  let productListDataFromStorage = appState.productList;
  const productListState = yield select(selectProductListState);

  if (
    productListState.data &&
    productListDataFromStorage?.data &&
    productListState.data.length === productListDataFromStorage.data.length
  ) {
    put(productListActions.getReachedEnd());
  }

  try {
    if (!productListDataFromStorage || productListDataFromStorage.isExpired()) {
      const data = yield call(restApiProductList);
      yield put(appActions.cacheProductList(data));
      productListDataFromStorage = new ProductListData(data, new Date());
    }

    const { page, searchOptions, searchKeyword } = productListState;

    if (!searchOptions) {
      yield put(productListActions.loadSearchOptions(productListDataFromStorage.getOptionsList()));
    }

    let productListData = isTest()
      ? productListDataFromStorage.data
      : getFilterDataByPrice(productListDataFromStorage.data, searchKeyword.price);

    if (searchKeyword.brand) {
      const reg = new RegExp(searchKeyword.brand, 'i');
      productListData = productListData.filter(productData => reg.test(productData.brand));
    }

    if (searchKeyword.model) {
      const reg = new RegExp(searchKeyword.model, 'i');
      productListData = productListData.filter(productData => reg.test(productData.model));
    }

    const currentPageProductList = productListData.slice(
      page * PRODUCTS_COUNT__PER_PAGE,
      page * PRODUCTS_COUNT__PER_PAGE + PRODUCTS_COUNT__PER_PAGE,
    );

    if (currentPageProductList.length + productListState.data.length === productListData.length) {
      yield put(productListActions.getReachedEnd());
    }

    yield put(productListActions.loadProductListSuccess(currentPageProductList));
  } catch (e) {
    yield put(productListActions.loadProductListFail(e));
  }
}

export function* watchLoadProductList() {
  yield throttle(3000, productListActions.LOAD__PRODUCT_LIST, loadProductList);
}

export function* searchProductModel() {
  yield takeLatest(productListActions.SEARCH__PRODUCT_MODEL, productListActions.searchProductModel);
}

export function* searchProductBrand() {
  yield takeLatest(productListActions.SEARCH__PRODUCT_BRAND, productListActions.searchProductBrand);
}

export function* searchProductPrice() {
  yield takeLatest(productListActions.SEARCH__PRODUCT_PRICE, productListActions.searchPriceRange);
}

export function* watchUpdateProductList() {
  yield debounce(2000, productListActions.UPDATE__PRODUCT_LIST, loadProductList);
}

export default function* rootProductListSaga() {
  yield all([
    fork(watchLoadProductList),
    fork(searchProductPrice),
    fork(searchProductModel),
    fork(searchProductBrand),
    fork(watchUpdateProductList),
    fork(setSearchInputError),
  ]);
}
