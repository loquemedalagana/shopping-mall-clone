import { all, fork, call, put, select, throttle, debounce, takeLatest } from 'redux-saga/effects';

import * as actions from 'src/actions/productListActions';
import { saveFetchedProductListData, getProductListDataFromStorage } from 'src/models/ProductListData';
import { restApiProductList } from 'src/http/api';
import { PRODUCTS_COUNT__PER_PAGE, selectProductListState } from 'src/stores/productListStore';
import { isTest } from 'src/env';

export const getFilterDataByPrice = (productList, { max: maxPrice, min: minPrice }) => {
  return productList.filter(productData => productData.price >= minPrice && productData.price <= maxPrice);
};

export function* loadProductList() {
  let productListDataFromStore = getProductListDataFromStorage();
  const productListState = yield select(selectProductListState);

  if (
    productListState.data &&
    productListDataFromStore?.data &&
    productListState.data.length === productListDataFromStore.data.length
  ) {
    put(actions.getReachedEnd());
  }

  try {
    if (!productListDataFromStore || productListDataFromStore.isExpired()) {
      const data = yield call(restApiProductList);
      saveFetchedProductListData(data);
      productListDataFromStore = getProductListDataFromStorage();
    }

    const { page, searchOptions, searchKeyword } = productListState;

    if (!searchOptions) {
      yield put(actions.loadSearchOptions(productListDataFromStore.getOptionsList()));
    }

    let productListData = isTest()
      ? productListDataFromStore.data
      : getFilterDataByPrice(productListDataFromStore.data, searchKeyword.price);

    if (searchKeyword.brand) {
      productListData = productListData.filter(productData => productData.brand === searchKeyword.brand);
    }

    const currentPageProductList = productListData.slice(
      page * PRODUCTS_COUNT__PER_PAGE,
      page * PRODUCTS_COUNT__PER_PAGE + PRODUCTS_COUNT__PER_PAGE,
    );

    if (currentPageProductList.length + productListState.data.length === productListData.length) {
      yield put(actions.getReachedEnd());
    }

    yield put(actions.loadProductListSuccess(currentPageProductList));
  } catch (e) {
    yield put(actions.loadProductListFail(e));
  }
}

export function* watchLoadProductList() {
  yield throttle(3000, actions.LOAD__PRODUCT_LIST, loadProductList);
}

export function* searchProductModel() {
  yield debounce(2000, actions.SEARCH__PRODUCT_MODEL, actions.searchProductModel);
}

export function* searchProductBrand() {
  yield debounce(2000, actions.SEARCH__PRODUCT_BRAND, actions.searchProductBrand);
}

export function* searchProductPrice() {
  yield debounce(2000, actions.SEARCH__PRODUCT_PRICE, actions.searchPriceRange);
}

export function* watchUpdateProductList() {
  yield debounce(2000, actions.UPDATE__PRODUCT_LIST, loadProductList);
}

export default function* rootProductListSaga() {
  yield all([
    fork(watchLoadProductList),
    fork(searchProductPrice),
    fork(searchProductModel),
    fork(searchProductBrand),
    fork(watchUpdateProductList),
  ]);
}
