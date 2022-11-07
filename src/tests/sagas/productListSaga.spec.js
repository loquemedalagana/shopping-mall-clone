import { select, takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { restApiProductList } from 'src/http/api';
import * as actions from 'src/actions/productListActions';
import { mockedItemList } from 'src/tests/__mocks__/mockedFetchedData';
import getMockedAppState from 'src/tests/__mocks__/getMockedAppState';
import { definedMockedItemList, mockedListOptions } from 'src/tests/__mocks__/mockedItemList';
import {
  loadProductList,
  searchProductModel,
  searchProductPrice,
  searchProductBrand,
} from 'src/actions/productListSaga';
import { selectAppState, initialState as appInitialState } from 'src/stores/appStore';
import { initialState, PRODUCTS_COUNT__PER_PAGE, selectProductListState } from 'src/stores/productListStore';

describe('product list saga test', () => {
  const mockedAppState = getMockedAppState();
  it('fetching character list saga is failed', async () => {
    const sampleError = new Error('some error occurred');
    const res = await expectSaga(loadProductList)
      .provide([
        [select(selectAppState), appInitialState],
        [
          select(selectProductListState),
          {
            ...initialState,
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductList), throwError(sampleError)],
      ])
      .put(actions.loadProductListFail(sampleError))
      .run();
  });

  it('fetching character list saga is success before loding search options', async () => {
    const res = await expectSaga(loadProductList)
      .provide([
        [select(selectAppState), mockedAppState],
        [
          select(selectProductListState),
          {
            ...initialState,
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductList), mockedItemList],
      ])
      .put(actions.loadSearchOptions(mockedListOptions))
      .put(actions.loadProductListSuccess(definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE)))
      .run();
  });

  it('fetching character list saga is success after loading search options', async () => {
    const res = await expectSaga(loadProductList)
      .provide([
        [select(selectAppState), mockedAppState],
        [
          select(selectProductListState),
          {
            ...initialState,
            page: 1,
            data: definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE),
            loading: true,
          },
        ],
        [matchers.call.fn(restApiProductList), mockedItemList],
      ])
      .put(
        actions.loadProductListSuccess(
          definedMockedItemList.slice(PRODUCTS_COUNT__PER_PAGE, PRODUCTS_COUNT__PER_PAGE * 2),
        ),
      )
      .run();
  });

  it('test get price range input saga', async () => {
    const searchPriceRangeGen = searchProductPrice();
    expect(searchPriceRangeGen.next().value).toEqual(
      takeLatest(actions.SEARCH__PRODUCT_PRICE, actions.searchPriceRange),
    );
  });

  it('test get model input saga', async () => {
    const searchModelGen = searchProductModel();
    expect(searchModelGen.next().value).toEqual(takeLatest(actions.SEARCH__PRODUCT_MODEL, actions.searchProductModel));
  });

  it('test get brand input saga', async () => {
    const searchBrandGen = searchProductBrand();
    expect(searchBrandGen.next().value).toEqual(takeLatest(actions.SEARCH__PRODUCT_BRAND, actions.searchProductBrand));
  });
});
