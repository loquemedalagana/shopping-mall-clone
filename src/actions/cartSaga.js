import { all, fork, call, put, select, takeLatest } from 'redux-saga/effects';

import * as actions from 'src/actions/cartActions';
import { restApiAddToCart } from 'src/http/api';
import { saveTotalCountOfProductsInCartInStorage } from 'src/models/ProductDetailData';

export function* addProductToCart({ payload }) {
  try {
    const response = yield call(restApiAddToCart, payload);
    yield put(actions.addCartSuccess(response));
    saveTotalCountOfProductsInCartInStorage(response);
  } catch (e) {
    yield put(actions.addCartFail(e));
  }
}

export function* watchAddProductList() {
  yield takeLatest(actions.ADD_CART__REQUEST, addProductToCart);
}

export default function* rootCartSaga() {
  yield all([fork(watchAddProductList)]);
}
