import { select } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { restApiProductDetail } from 'src/http/api';
import * as actions from 'src/actions/productDetailActions';
import { mockedItemDetail } from 'src/tests/__mocks__/mockedFetchedData';
import { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';
import getMockedAppState from 'src/tests/__mocks__/getMockedAppState';
import { loadProductDetail } from 'src/actions/productDetailSaga';
import { selectAppState, initialState as initialAppState } from 'src/stores/appStore';
import { initialState, selectProductDetailState } from 'src/stores/productDetailStore';

describe('product detail test', () => {
  const sampleError = new Error('some error occurred');
  const mockedAppState = getMockedAppState();

  it('should catch error if fails', async () => {
    const res = await expectSaga(loadProductDetail)
      .provide([
        [select(selectAppState), initialAppState],
        [
          select(selectProductDetailState),
          {
            ...initialState,
            productId: 'errorId',
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductDetail), throwError(sampleError)],
      ])
      .put(actions.loadProductDetailFail(sampleError))
      .run();
  });

  it('should receive data if success', async () => {
    const res = await expectSaga(loadProductDetail)
      .provide([
        [select(selectAppState), mockedAppState],
        [
          select(selectProductDetailState),
          {
            ...initialState,
            productId: definedMockedItemDetail.id,
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductDetail), mockedItemDetail],
      ])
      .put(actions.loadProductDetailSuccess(definedMockedItemDetail))
      .run();
  });
});
