import { all, fork, take, call, put, select, takeEvery } from 'redux-saga/effects';

import * as actions from 'src/actions/productListActions';
import { saveFetchedProductListData, getProductListDataFromStorage } from 'src/models/ProductListData';
import { restApiProductList } from 'src/http/api';
import { PRODUCTS_COUNT__PER_PAGE, selectProductListState } from 'src/stores/productListStore';

export function* loadProductList() {
  let productListDataFromStore = getProductListDataFromStorage();
  const productListState = yield select(selectProductListState);

  try {
    if (!productListDataFromStore || productListDataFromStore.isExpired()) {
      const data = yield call(restApiProductList);
      saveFetchedProductListData(data);
      productListDataFromStore = getProductListDataFromStorage();
    }

    const { page } = productListState;

    yield put({
      type: actions.LOAD__PRODUCT_LIST__SUCCESS,
      payload: {
        data: productListDataFromStore.data.slice(
          page * PRODUCTS_COUNT__PER_PAGE,
          page * PRODUCTS_COUNT__PER_PAGE + PRODUCTS_COUNT__PER_PAGE,
        ),
      },
    });
  } catch (e) {
    yield put({
      type: actions.LOAD__PRODUCT_LIST__FAIL,
      payload: {
        error: e,
      },
    });
  }
}

export function* watchLoadProductList() {
  yield takeEvery(actions.LOAD__PRODUCT_LIST, loadProductList);
}

export default function* rootProductListSaga() {
  yield all([fork(watchLoadProductList)]);
}
