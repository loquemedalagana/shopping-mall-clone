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
