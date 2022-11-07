import { all, fork, call, put, select, takeEvery } from 'redux-saga/effects';

import * as appActions from 'src/actions/appActions';
import * as productDetailActions from 'src/actions/productDetailActions';
import { restApiProductDetail } from 'src/http/api';
import { selectProductDetailState } from 'src/stores/productDetailStore';
import { selectAppState } from 'src/stores/appStore';

export function* loadProductDetail() {
  const productDetailState = yield select(selectProductDetailState);
  const appState = yield select(selectAppState);
  const productDetailDataFromAppState = appState.productDetail.filter(
    productDetailData => productDetailData.data.id === productDetailState.productId,
  )[0];

  try {
    if (!productDetailDataFromAppState) {
      const data = yield call(restApiProductDetail, productDetailState.productId);
      yield put(appActions.cacheProductDetail(data));
      yield put(productDetailActions.loadProductDetailSuccess(data));
      return;
    }

    yield put(productDetailActions.loadProductDetailSuccess(productDetailDataFromAppState?.data));
  } catch (e) {
    yield put(productDetailActions.loadProductDetailFail(e));
  }
}

export function* watchLoadProductDetail() {
  yield takeEvery(productDetailActions.LOAD__PRODUCT_DETAIL, loadProductDetail);
}

export default function* rootProductDetailSaga() {
  yield all([fork(watchLoadProductDetail)]);
}
