import * as actions from 'src/actions/productListActions';
import { productListReducer, initialState, PRODUCTS_COUNT__PER_PAGE } from 'src/stores/productListStore';
import mockedItemList from 'src/tests/__mocks__/mockedItemList';
import ProductCoreData from 'src/models/ProductCoreData';

describe('product reducer test', () => {
  const sampleError = new Error('some error occurred');
  const sampleProductList = mockedItemList.map(data => new ProductCoreData(data));

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
          type: actions.FETCH_PRODUCT_LIST__FAIL,
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

  it('should get data list', () => {
    expect(
      productListReducer(initialState, {
        type: actions.GET__PRODUCT_LIST,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should get loading state', () => {
    expect(
      productListReducer(
        {
          ...initialState,
          data: sampleProductList,
        },
        {
          type: actions.PRODUCT_LIST__LOADING,
        },
      ),
    ).toEqual({
      ...initialState,
      data: sampleProductList,
      loading: true,
    });
  });

  it('should get success state', () => {
    expect(
      productListReducer(
        {
          ...initialState,
          loading: true,
        },
        {
          type: actions.FETCH_PRODUCT_LIST__SUCCESS,
          payload: {
            data: sampleProductList,
          },
        },
      ),
    ).toEqual({
      ...initialState,
      data: sampleProductList,
    });
  });

  it('should load more data', () => {
    expect(
      productListReducer(
        {
          page: 0,
          error: null,
          loading: false,
          isReachedEnd: false,
          data: sampleProductList,
          currentData: [],
        },
        {
          type: actions.GET__PRODUCT_LIST__PER_PAGE,
        },
      ),
    ).toEqual({
      page: 1,
      error: null,
      loading: false,
      isReachedEnd: false,
      data: sampleProductList,
      currentData: sampleProductList.slice(0, PRODUCTS_COUNT__PER_PAGE),
    });
  });

  it('should reached end', () => {
    expect(
      productListReducer(
        {
          page: Math.ceil(sampleProductList / PRODUCTS_COUNT__PER_PAGE),
          error: null,
          loading: false,
          isReachedEnd: false,
          data: sampleProductList,
          currentData: sampleProductList,
        },
        {
          type: actions.GET__REACHED_END,
        },
      ),
    ).toEqual({
      page: Math.ceil(sampleProductList / PRODUCTS_COUNT__PER_PAGE),
      error: null,
      loading: false,
      isReachedEnd: true,
      data: sampleProductList,
      currentData: sampleProductList,
    });
  });
});
