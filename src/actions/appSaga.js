import { all, fork, take } from 'redux-saga/effects';

import * as actions from 'src/actions/appActions';
import { APP_KEY, isTest, APP__CART_COUNT_KEY } from 'src/env';

export function* readCachedData() {
  const productIds = Object.keys(sessionStorage).filter(key => key !== APP_KEY);
  yield;
}

export default function* rootAppSaga() {
  yield all([]);
}
