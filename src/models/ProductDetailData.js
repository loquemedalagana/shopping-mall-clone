import { APP_KEY, isTest } from 'src/env';
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

  changeTimeForTest() {
    if (!isTest()) {
      throw new Error('This method should only be used in the test env.');
    }
    this.fetchedTime = new Date(new Date().getTime() - (ONE_HOUR + 10));
  }
}

export default ProductDetailData;

export const saveFetchedProductDetailData = data => {
  const storageItems = JSON.parse(sessionStorage.getItem(APP_KEY));
  const currentTime = new Date();
  sessionStorage.setItem(
    APP_KEY,
    JSON.stringify({
      ...storageItems,
      [data.id]: {
        data,
        savedTime: currentTime,
      },
    }),
  );
};

export const getFetchedProductDetailDataFromStorage = itemId => {
  const stringifyData = sessionStorage.getItem(APP_KEY);
  if (!stringifyData) return undefined;
  const storageItems = JSON.parse(stringifyData);

  if (!storageItems[itemId]) return undefined;

  return new ProductDetailData(storageItems[itemId].data, new Date(storageItems[itemId].savedTime));
};
