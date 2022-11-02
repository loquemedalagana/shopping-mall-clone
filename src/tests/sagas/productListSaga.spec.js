import { select } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { restApiProductList } from 'src/http/api';
import * as actions from 'src/actions/productListActions';
import ProductListData, { saveFetchedProductListData, getProductListDataFromStorage } from 'src/models/ProductListData';
import mockedItemList, { definedMockedItemList } from 'src/tests/__mocks__/mockedItemList';
import { loadProductList } from 'src/actions/productListSaga';
import { initialState, PRODUCTS_COUNT__PER_PAGE, selectProductListState } from '../../stores/productListStore';

describe('product list saga test', () => {
  const sampleError = new Error('some error occurred');

  it('fetching character list saga is failed', async () => {
    const res = await expectSaga(loadProductList)
      .withState({
        ...initialState,
        loading: true,
      })
      .provide([
        [
          select(selectProductListState),
          {
            ...initialState,
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductList), throwError(sampleError)],
      ])
      .put({
        type: actions.LOAD__PRODUCT_LIST__FAIL,
        payload: {
          error: sampleError,
        },
      })
      .run();
  });

  it('fetching character list saga is successed', async () => {
    const res = await expectSaga(loadProductList)
      .withState({
        ...initialState,
        loading: true,
      })
      .provide([
        [
          select(selectProductListState),
          {
            ...initialState,
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductList), mockedItemList],
      ])
      .put({
        type: actions.LOAD__PRODUCT_LIST__SUCCESS,
        payload: {
          data: definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE),
        },
      })
      .run();
  });
});
