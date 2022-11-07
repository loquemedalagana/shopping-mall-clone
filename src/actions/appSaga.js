/* eslint-disable no-plusplus */
import { all, fork, take, takeEvery } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';
import { APP__PRODUCT_LIST_KEY } from 'src/env';
import { getProductListDataFromStorage } from 'src/models/ProductListData';
import { getFetchedProductDetailDataFromStorage } from 'src/models/ProductDetailData';

export function* removeCachedData({ payload }) {
  sessionStorage.removeItem(payload.productId);
  yield;
}

export function* readCachedData() {
  while (sessionStorage.length > 0) {
    const cachedDataIds = Object.keys(sessionStorage);

    for (let i = 0; i < cachedDataIds.length; i++) {
      const cachedDataId = cachedDataIds[i];
      const parsedData =
        cachedDataId === APP__PRODUCT_LIST_KEY
          ? getProductListDataFromStorage()
          : getFetchedProductDetailDataFromStorage(cachedDataId);
      if (parsedData.isExpired()) {
        // TODO: remove cached data
      }
    }
    yield;
  }
}

export function* watchReadCachedData() {
  yield takeEvery(actions.READ__CACHED_DATA, readCachedData);
}

export default function* rootAppSaga() {
  yield all([]);
}
