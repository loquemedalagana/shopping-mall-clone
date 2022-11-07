import ProductDetailData from 'src/models/ProductDetailData';
import ProductListData from 'src/models/ProductListData';
import * as mockedFetchedState from 'src/tests/__mocks__/mockedFetchedData';
import { ONE_HOUR } from 'src/models/constants';

const getMockedAppState = (isExpired = false) => {
  const currentTime = new Date();
  const expiredTimeForTest = new Date(new Date().getTime() - (ONE_HOUR + 10));
  const productList = new ProductListData(
    mockedFetchedState.mockedItemList,
    isExpired ? expiredTimeForTest : currentTime,
  );
  const productDetail = [
    new ProductDetailData(mockedFetchedState.mockedItemDetail, isExpired ? expiredTimeForTest : currentTime),
    new ProductDetailData(mockedFetchedState.mockedItemDetail2, isExpired ? expiredTimeForTest : currentTime),
  ];

  return {
    error: null,
    productList,
    productDetail,
  };
};

export default getMockedAppState;
