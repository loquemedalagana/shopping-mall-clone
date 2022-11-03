import { select, debounce } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { restApiProductList } from 'src/http/api';
import * as actions from 'src/actions/productListActions';
import mockedItemList, { definedMockedItemList } from 'src/tests/__mocks__/mockedItemList';
import {
  loadProductList,
  searchProductModel,
  searchProductPrice,
  searchProductBrand,
} from 'src/actions/productListSaga';
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
      .put(actions.loadProductListFail(sampleError))
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
      .put(actions.loadProductListSuccess(definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE)))
      .run();
  });

  it('test get price range input saga', async () => {
    const searchPriceRangeGen = searchProductPrice();
    expect(searchPriceRangeGen.next().value).toEqual(
      debounce(2000, actions.SEARCH__PRODUCT_PRICE, actions.searchPriceRange),
    );
  });

  it('test get model input saga', async () => {
    const searchModelGen = searchProductModel();
    expect(searchModelGen.next().value).toEqual(
      debounce(2000, actions.SEARCH__PRODUCT_MODEL, actions.searchProductModel),
    );
  });

  it('test get brand input saga', async () => {
    const searchBrandGen = searchProductBrand();
    expect(searchBrandGen.next().value).toEqual(
      debounce(2000, actions.SEARCH__PRODUCT_BRAND, actions.searchProductBrand),
    );
  });
});
