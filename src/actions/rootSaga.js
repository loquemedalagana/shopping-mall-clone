import { all, fork } from 'redux-saga/effects';

import rootAppSaga from 'src/actions/appSaga';

export default function* rootSaga() {
  yield all([fork(rootAppSaga)]);
}
