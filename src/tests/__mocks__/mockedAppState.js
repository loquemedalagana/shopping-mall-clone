import ProductDetailData from 'src/models/ProductDetailData';
import ProductListData from 'src/models/ProductListData';
import * as mockedFetchedState from 'src/tests/__mocks__/mockedFetchedData';

const productList = new ProductListData(mockedFetchedState.mockedItemList, new Date());
const productDetail = [
  new ProductDetailData(mockedFetchedState.mockedItemDetail, new Date()),
  new ProductDetailData(mockedFetchedState.mockedItemDetail2, new Date()),
];

const mockedAppState = {
  error: null,
  productList,
  productDetail,
};

export default mockedAppState;
