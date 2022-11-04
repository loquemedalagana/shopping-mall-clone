import { all, fork, call, put, select, takeLatest } from 'redux-saga/effects';

import * as actions from 'src/actions/cartActions';

export function* addProductToCart({ payload }) {
  console.log(payload);
  yield;
}

export function* watchAddProductList() {
  yield takeLatest(actions.ADD_CART__REQUEST, addProductToCart);
}

export default function* rootCartSaga() {
  yield all([fork(watchAddProductList)]);
}
