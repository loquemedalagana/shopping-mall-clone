import { all, fork, take, call, put } from 'redux-saga/effects';

import * as actions from 'src/actions/productListActions';
import { restApiProductList } from 'src/http/api';

export function* fetchProductList() {
  try {
    const data = yield call(restApiProductList);
    // save to session storage
  } catch (e) {
    yield put({
      type: actions.FETCH_PRODUCT_LIST__FAIL,
    });
  }
}

export default function* rootProductListSaga() {
  yield all([]);
}
