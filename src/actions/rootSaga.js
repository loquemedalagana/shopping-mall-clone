import { all, fork } from 'redux-saga/effects';

import rootAppSaga from 'src/actions/appSaga';
import rootProductListSaga from 'src/actions/productListSaga';
import rootProductDetailSaga from 'src/actions/productDetailSaga';
import rootCartSaga from 'src/actions/cartSaga';

export default function* rootSaga() {
  yield all([fork(rootAppSaga), fork(rootProductListSaga), fork(rootProductDetailSaga), fork(rootCartSaga)]);
}
