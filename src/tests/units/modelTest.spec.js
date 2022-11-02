/* eslint-disable no-console */
import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';

import mockedItemList, { definedMockedItemList } from 'src/tests/__mocks__/mockedItemList';
import mockedItemDetail, { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';
import { ONE_HOUR } from 'src/models/constants';

describe('model constructor test', () => {
  it('product list class test', () => {
    const productListData = new ProductListData(mockedItemList, new Date());
    expect(productListData.data).toEqual(definedMockedItemList);
    expect(productListData.isExpired()).toEqual(false);
    console.log(productListData.savedTime + ONE_HOUR);
  });

  it('product detail', () => {
    const productDetailData = new ProductDetailData(mockedItemDetail, new Date());
    expect(productDetailData.data).toEqual(definedMockedItemDetail);
    expect(productDetailData.isExpired()).toEqual(false);
  });
});
