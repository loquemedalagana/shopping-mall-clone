import { APP_KEY } from 'src/env';
import ProductDetail from 'src/models/ProductDetail';
import { ONE_HOUR } from 'src/models/constants';

class ProductDetailData {
  constructor(args, savedTime) {
    this.data = new ProductDetail(args);
    this.savedTime = savedTime;
  }

  isExpired() {
    return this.savedTime - new Date() > ONE_HOUR;
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
  const storageItems = JSON.parse(sessionStorage.getItem(APP_KEY));
  return new ProductDetailData(storageItems[itemId].data, new Date(storageItems[itemId].savedTime));
};
