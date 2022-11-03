import * as actions from 'src/actions/productDetailActions';
import { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';
import { productDetailReducer, initialState } from 'src/stores/productDetailStore';

describe('product detail reducer test', () => {
  const sampleError = new Error('some error occurred');

  it('should return initial state', () => {
    expect(productDetailReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should receive error', () => {
    expect(
      productDetailReducer(
        {
          ...initialState,
          loading: true,
        },
        actions.loadProductDetailFail(sampleError),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      error: sampleError,
    });
  });

  it('read product id', () => {
    expect(
      productDetailReducer(
        {
          ...initialState,
        },
        actions.loadProductDetail(definedMockedItemDetail.id),
      ),
    ).toEqual({
      ...initialState,
      loading: true,
      productId: definedMockedItemDetail.id,
    });
  });

  it('load product detail success', () => {
    expect(
      productDetailReducer(
        {
          ...initialState,
          loading: true,
          productId: definedMockedItemDetail.id,
        },
        actions.loadProductDetailSuccess(definedMockedItemDetail),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      productId: definedMockedItemDetail.id,
      data: definedMockedItemDetail,
    });
  });
});
