import ProductCore from 'src/models/ProductCore';
import { ONE_HOUR } from 'src/models/constants';

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
