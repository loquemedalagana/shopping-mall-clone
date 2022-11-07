import ProductDetail from 'src/models/ProductDetail';
import { ONE_HOUR } from 'src/models/constants';

class ProductDetailData {
  constructor(args, fetchedTime) {
    this.data = new ProductDetail(args);
    this.fetchedTime = new Date(fetchedTime);
  }

  isExpired() {
    return new Date().getTime() - this.fetchedTime.getTime() >= ONE_HOUR;
  }
}

export default ProductDetailData;
