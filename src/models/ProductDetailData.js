import { APP_KEY, isTest, APP__CART_COUNT_KEY } from 'src/env';
import ProductDetail from 'src/models/ProductDetail';
import { ONE_HOUR } from 'src/models/constants';

class ProductDetailData {
  constructor(args, fetchedTime) {
    this.data = new ProductDetail(args);
    this.fetchedTime = fetchedTime;
  }

  isExpired() {
    return new Date().getTime() - this.fetchedTime.getTime() >= ONE_HOUR;
  }
}

export default ProductDetailData;

export const saveFetchedProductDetailData = data => {
  const currentTime = new Date();
  const expiredTimeForTest = new Date(new Date().getTime() - (ONE_HOUR + 10));
  sessionStorage.setItem(
    data.id,
    JSON.stringify({
      data,
      savedTime: isTest() ? expiredTimeForTest : currentTime,
    }),
  );
};

export const getFetchedProductDetailDataFromStorage = itemId => {
  const stringifyData = sessionStorage.getItem(itemId);
  if (!stringifyData) return undefined;
  const storageItems = JSON.parse(stringifyData);
  return new ProductDetailData(storageItems.data, new Date(storageItems.savedTime));
};

export const saveTotalCountOfProductsInCartInStorage = ({ count }) => {
  localStorage.setItem(
    APP_KEY,
    JSON.stringify({
      [APP__CART_COUNT_KEY]: {
        count,
      },
    }),
  );
};

export const getTotalCountOfProductsInCartInStorage = () => {
  const stringifyData = localStorage.getItem(APP_KEY);
  if (!stringifyData) return 0;
  const storageItems = JSON.parse(stringifyData);
  if (!storageItems[APP__CART_COUNT_KEY]) return 0;

  return parseInt(storageItems[APP__CART_COUNT_KEY].count, 10) || 0;
};
