import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';

import mockedItemList, { definedMockedItemList, mockedListOptions } from 'src/tests/__mocks__/mockedItemList';
import mockedItemDetail, { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';
import { ONE_HOUR } from 'src/models/constants';

describe('model constructor test', () => {
  it('product list class test', () => {
    const productListData = new ProductListData(mockedItemList, new Date());
    expect(productListData.data).toEqual(definedMockedItemList);
    expect(productListData.isExpired()).toEqual(false);
  });

  it('product detail', () => {
    const productDetailData = new ProductDetailData(mockedItemDetail, new Date());
    expect(productDetailData.data).toEqual(definedMockedItemDetail);
    expect(productDetailData.isExpired()).toEqual(false);
  });

  it('product list expired test', () => {
    const mockedPreviousTime = new Date(new Date().getTime() - (ONE_HOUR + 10));
    const productListData = new ProductListData(mockedItemList, mockedPreviousTime);
    expect(productListData.data).toEqual(definedMockedItemList);
    expect(productListData.isExpired()).toEqual(true);
  });

  it('product detail expired test', () => {
    const mockedPreviousTime = new Date(new Date().getTime() - (ONE_HOUR + 10));
    const productDetailData = new ProductDetailData(mockedItemDetail, mockedPreviousTime);
    expect(productDetailData.data).toEqual(definedMockedItemDetail);
    expect(productDetailData.isExpired()).toEqual(true);
  });

  it('product model options test', () => {
    const productListData = new ProductListData(mockedItemList, new Date());
    expect(productListData.getOptionsList()).toEqual(mockedListOptions);
  });
});
