import { all, fork } from 'redux-saga/effects';

import rootAppSaga from 'src/actions/appSaga';
import rootProductListSaga from 'src/actions/productListSaga';

export default function* rootSaga() {
  yield all([fork(rootAppSaga), fork(rootProductListSaga)]);
}
