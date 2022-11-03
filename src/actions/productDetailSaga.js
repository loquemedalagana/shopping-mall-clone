import { all, fork, call, put, select, takeEvery } from 'redux-saga/effects';

import * as actions from 'src/actions/productDetailActions';
import { restApiProductDetail } from 'src/http/api';
import { saveFetchedProductDetailData, getFetchedProductDetailDataFromStorage } from 'src/models/ProductDetailData';
import { selectProductDetailState } from 'src/stores/productDetailStore';

export function* loadProductDetail() {
  const productDetailState = yield select(selectProductDetailState);
  let productDetailDataFromStore = getFetchedProductDetailDataFromStorage(productDetailState.productId);

  try {
    if (!productDetailDataFromStore || productDetailDataFromStore.isExpired()) {
      const data = yield call(restApiProductDetail, productDetailState.productId);
      saveFetchedProductDetailData(data);
      productDetailDataFromStore = getFetchedProductDetailDataFromStorage(productDetailState.productId);
    }

    yield put(actions.loadProductDetailSuccess(productDetailDataFromStore?.data));
  } catch (e) {
    yield put(actions.loadProductDetailFail(e));
  }
}

export function* watchLoadProductDetail() {
  yield takeEvery(actions.LOAD__PRODUCT_DETAIL, loadProductDetail);
}

export default function* rootProductDetailSaga() {
  yield all([fork(watchLoadProductDetail)]);
}
