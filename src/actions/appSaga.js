/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import { all, fork, takeEvery, select, put } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';
import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';
import { selectAppState } from 'src/stores/appStore';
import { isTest } from 'src/env';

export function* readProductDetail({ data, fetchedTime }) {
  const currentProductDetailState = new ProductDetailData(data, fetchedTime);
  if (currentProductDetailState.isExpired()) {
    yield put(actions.removeCachedProductDetailData(data.id));
  }
}

export function* readProductList({ data, fetchedTime }) {
  const currentProductListState = new ProductListData(data, fetchedTime);
  if (currentProductListState.isExpired()) {
    yield put(actions.removeCachedProductListData());
  }
}

export function* readCachedData() {
  while (!isTest()) {
    const currentAppState = yield select(selectAppState);

    for (let i = 0; i < currentAppState.productDetail.length; i++) {
      yield readProductDetail(currentAppState.productDetail[i]);
    }

    if (currentAppState?.productList) {
      yield readProductList(currentAppState.productList);
    }
  }
}

export function* watchReadCachedProductDetailData() {
  yield takeEvery(actions.READ__CACHED_DATA, readCachedData);
}

export default function* rootAppSaga() {
  yield all([fork(watchReadCachedProductDetailData)]);
}
