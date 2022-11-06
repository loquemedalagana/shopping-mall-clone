import * as actions from 'src/actions/productListActions';
import { productListReducer, initialState, PRODUCTS_COUNT__PER_PAGE } from 'src/stores/productListStore';
import { definedMockedItemList } from 'src/tests/__mocks__/mockedItemList';

describe('product list reducer test', () => {
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
        actions.loadProductListFail(sampleError),
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
        actions.loadProductListSuccess(definedMockedItemList.slice(0, PRODUCTS_COUNT__PER_PAGE)),
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
        actions.getReachedEnd(),
      ),
    ).toEqual({
      page: Math.ceil(definedMockedItemList.length / PRODUCTS_COUNT__PER_PAGE),
      error: null,
      loading: false,
      isReachedEnd: true,
      data: definedMockedItemList,
    });
  });

  it('should detect search input error', () => {
    const sampleSearchKeyword = 'jajaja';
    expect(
      productListReducer(
        {
          ...initialState,
          searchKeyword: {
            ...initialState.searchKeyword,
            model: sampleSearchKeyword,
          },
        },
        actions.setSearchInputError(true),
      ),
    ).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
      isSearchInputError: true,
    });
  });

  it('get search keyword model (1)', () => {
    const sampleSearchKeyword = 'liqui';
    expect(productListReducer(initialState, actions.searchProductModel(sampleSearchKeyword))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
    });
    const reg = new RegExp(sampleSearchKeyword, 'i');
    expect(reg.test('Liquid Express E320')).toEqual(true);
    expect(reg.test('beTouch E210')).toEqual(false);
  });

  it('get search keyword model (2)', () => {
    const sampleSearchKeyword = 'min';
    expect(productListReducer(initialState, actions.searchProductModel(sampleSearchKeyword))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
    });
    const reg = new RegExp(sampleSearchKeyword, 'i');
    expect(reg.test('Liquid mini E310')).toEqual(true);
    expect(reg.test('beTouch E210')).toEqual(false);
  });

  it('get search keyword model (3)', () => {
    const sampleSearchKeyword = 'touch';
    expect(productListReducer(initialState, actions.searchProductModel(sampleSearchKeyword))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
    });
    const reg = new RegExp(sampleSearchKeyword, 'i');
    expect(reg.test('beTouch E210')).toEqual(true);
    expect(reg.test('Iconia Tab A500')).toEqual(false);
  });

  it('get search keyword model (4)', () => {
    const sampleSearchKeyword = 'a501';
    expect(productListReducer(initialState, actions.searchProductModel(sampleSearchKeyword))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
    });
    const reg = new RegExp(sampleSearchKeyword, 'i');
    expect(reg.test('Iconia Tab A501')).toEqual(true);
    expect(reg.test('Iconia Tab A500')).toEqual(false);
  });

  it('get search keyword model (5)', () => {
    const sampleSearchKeyword = 'a50';
    expect(productListReducer(initialState, actions.searchProductModel(sampleSearchKeyword))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        model: sampleSearchKeyword,
      },
    });
    const reg = new RegExp(sampleSearchKeyword, 'i');
    expect(reg.test('Iconia Tab A501')).toEqual(true);
    expect(reg.test('Iconia Tab A500')).toEqual(true);
    expect(reg.test('Iconia Tab A511')).toEqual(false);
  });

  it('get search keyword brand', () => {
    expect(productListReducer(initialState, actions.searchProductBrand('Acer'))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        brand: 'Acer',
      },
    });
  });

  it('get search keyword price', () => {
    expect(productListReducer(initialState, actions.searchPriceRange({ min: 180, max: 250 }))).toEqual({
      ...initialState,
      searchKeyword: {
        ...initialState.searchKeyword,
        price: {
          min: 180,
          max: 250,
        },
      },
    });
  });
});
