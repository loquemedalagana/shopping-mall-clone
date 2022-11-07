/* eslint-disable no-plusplus */
import { all, fork, take, takeEvery, takeLatest, select } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';
import { selectAppState } from 'src/stores/appStore';

export function* readCachedProductListData() {
  yield;
}

export function* readCachedData() {
  while(true) {
    const currentAppState = yield select(selectAppState);
    // console.log(currentAppState.productList?.fetchedTime);
  }
}

export function* watchReadCachedProductDetailData() {
  yield takeEvery(actions.READ__CACHED_DATA, readCachedData);
}

export default function* rootAppSaga() {
  yield all([ fork(watchReadCachedProductDetailData)]);
}
