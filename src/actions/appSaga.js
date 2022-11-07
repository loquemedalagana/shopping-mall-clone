/* eslint-disable no-plusplus */
import { all, fork, take, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';

export function* removeCachedData({ payload }) {
  sessionStorage.removeItem(payload.productId);
  yield;
}

export function* readCachedData() {
  yield;
}

export function* watchReadCachedData() {
  yield takeEvery(actions.READ__CACHED_DATA, readCachedData);
}

export default function* rootAppSaga() {
  yield all([]);
}
