import PropTypes from 'prop-types';

class ProductCore {
  constructor(args) {
    this.id = args.id;
    this.brand = args.brand;
    this.model = args.model;
    this.price = args.price;
    this.imgUrl = args.imgUrl;
  }
}

export default ProductCore;

export const ProductCoreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
});
