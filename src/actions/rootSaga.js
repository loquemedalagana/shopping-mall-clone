import { all, fork } from 'redux-saga/effects';

import rootProductListSaga from 'src/actions/productListSaga';
import rootProductDetailSaga from 'src/actions/productDetailSaga';
import rootCartSaga from 'src/actions/cartSaga';

export default function* rootSaga() {
  yield all([fork(rootProductListSaga), fork(rootProductDetailSaga), fork(rootCartSaga)]);
}
