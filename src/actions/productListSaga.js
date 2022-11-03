import { all, fork, call, put, select, throttle, debounce } from 'redux-saga/effects';

import * as actions from 'src/actions/productListActions';
import { saveFetchedProductListData, getProductListDataFromStorage } from 'src/models/ProductListData';
import { restApiProductList } from 'src/http/api';
import { PRODUCTS_COUNT__PER_PAGE, selectProductListState } from 'src/stores/productListStore';

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

    const { page, searchKeyword } = productListState;

    yield put(
      actions.loadProductListSuccess(
        productListDataFromStore.data.slice(
          page * PRODUCTS_COUNT__PER_PAGE,
          page * PRODUCTS_COUNT__PER_PAGE + PRODUCTS_COUNT__PER_PAGE,
        ),
      ),
    );
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

export default function* rootProductListSaga() {
  yield all([fork(watchLoadProductList), fork(searchProductPrice), fork(searchProductModel), fork(searchProductBrand)]);
}
