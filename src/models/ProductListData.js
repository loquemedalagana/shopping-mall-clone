import { ONE_HOUR } from 'src/models/constants';
import ProductCoreData from 'src/models/ProductCoreData';

class ProductListData {
  constructor(args, savedTime) {
    this.productListData = args.map(data => new ProductCoreData(data));
    this.savedTime = savedTime;
  }

  isExpired() {
    return this.savedTime - new Date() > ONE_HOUR;
  }
}

export default ProductListData;
