import PropTypes from 'prop-types';
import ProductCore from 'src/models/ProductCore';

class ProductDetail extends ProductCore {
  constructor(args) {
    super(args);
    this.networkTechnology = args.networkTechnology;
    this.networkSpeed = args.networkSpeed;
    this.announced = args.announced;
    this.cpu = args.cpu;
    this.ram = args.ram;
    this.os = args.os;
    this.displayResolution = args.displayResolution;
    this.battery = args.battery;
    this.cameras = this._getCameraData(args);
    this.dimentions = args.dimentions;
    this.weight = args.weight;
    this.colors = args.colors;
    this.options = args.options;
  }

  _getStringToArray(args) {
    if (typeof args === 'string') return [args];
    return args;
  }

  _getCameraData(args) {
    return [...this._getStringToArray(args.primaryCamera), ...this._getStringToArray(args.secondaryCmera)];
  }
}

export default ProductDetail;

export const OptionItemType = PropTypes.shape({
  code: PropTypes.number,
  name: PropTypes.string,
});

export const ProductDetailType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
  networkTechnology: PropTypes.string,
  networkSpeed: PropTypes.string,
  announced: PropTypes.string,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  os: PropTypes.string,
  displayResolution: PropTypes.string,
  battery: PropTypes.string,
  cameras: PropTypes.arrayOf(PropTypes.string),
  dimentions: PropTypes.string,
  weight: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.shape({
    colors: PropTypes.arrayOf(OptionItemType),
    storages: PropTypes.arrayOf(OptionItemType),
  }),
});
