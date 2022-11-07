/* eslint-disable no-plusplus */
import { all, fork, take, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';

export function* readCachedProductListData() {
  yield;
}

export function* readCachedProductDetailData() {
  yield;
}

export function* watchReadCachedProductListData() {
  yield takeEvery(actions.READ__CACHED_PRODUCT_LIST_DATA, readCachedProductListData);
}

export function* watchReadCachedProductDetailData() {
  yield takeEvery(actions.READ__CACHED_PRODUCT_DETAIL_DATA, readCachedProductDetailData);
}

export default function* rootAppSaga() {
  yield all([fork(watchReadCachedProductListData), fork(watchReadCachedProductDetailData)]);
}
