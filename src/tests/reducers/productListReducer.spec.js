import * as actions from 'src/actions/productListActions';
import { productListReducer, initialState, PRODUCTS_COUNT__PER_PAGE } from 'src/stores/productListStore';
import { definedMockedItemList } from 'src/tests/__mocks__/mockedItemList';

describe('product reducer test', () => {
  const sampleError = new Error('some error occurred');

  it('should return initial state', () => {
    expect(productListReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should receive error', () => {
    expect(
      productListReducer(
        {
          ...initialState,
          loading: true,
        },
        {
          type: actions.LOAD__PRODUCT_LIST__FAIL,
          payload: {
            error: sampleError,
          },
        },
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      error: sampleError,
    });
  });

  it('success state', () => {
    expect(
      productListReducer(
        {
          ...initialState,
          loading: true,
        },
        {
          type: actions.LOAD__PRODUCT_LIST__SUCCESS,
          payload: {
            data: definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE),
          },
        },
      ),
    ).toEqual({
      ...initialState,
      page: 1,
      loading: false,
      data: definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE),
    });
  });

  it('should reached end', () => {
    expect(
      productListReducer(
        {
          page: Math.ceil(definedMockedItemList.length / PRODUCTS_COUNT__PER_PAGE),
          error: null,
          loading: false,
          isReachedEnd: false,
          data: definedMockedItemList,
        },
        {
          type: actions.GET__REACHED_END,
        },
      ),
    ).toEqual({
      page: Math.ceil(definedMockedItemList.length / PRODUCTS_COUNT__PER_PAGE),
      error: null,
      loading: false,
      isReachedEnd: true,
      data: definedMockedItemList,
    });
  });
});
