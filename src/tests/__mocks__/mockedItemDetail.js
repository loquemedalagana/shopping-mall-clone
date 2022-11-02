import ProductDetail from 'src/models/ProductDetail';

const mockedItemDetail = {
  id: 'qu-cIoRt8Y4ZeQdCuOr4l',
  brand: 'Acer',
  model: 'Liquid E3',
  price: '200',
  imgUrl: 'https://front-test-api.herokuapp.com/images/qu-cIoRt8Y4ZeQdCuOr4l.jpg',
  networkTechnology: 'GSM / HSPA',
  networkSpeed: 'HSPA',
  gprs: 'Yes',
  edge: 'Yes',
  announced: '2014  February',
  status: 'Available. Released 2014  April',
  dimentions: '136 x 68 x 9 mm (5.35 x 2.68 x 0.35 in)',
  weight: '134',
  sim: ['Single SIM (Micro-SIM) or Dual SIM (Micro-SIM', 'dual stand-by)'],
  displayType: 'IPS LCD capacitive touchscreen  16M colors',
  displayResolution: '4.7 inches (~65.8% screen-to-body ratio)',
  displaySize: '720 x 1280 pixels (~312 ppi pixel density)',
  os: 'Android 4.2.2 (Jelly Bean)',
  cpu: 'Quad-core 1.2 GHz Cortex-A7',
  chipset: 'Mediatek MT6589',
  gpu: 'PowerVR SGX544',
  externalMemory: 'microSD  up to 32 GB (dedicated slot)',
  internalMemory: ['4 GB'],
  ram: '1 GB RAM',
  primaryCamera: ['13 MP', 'autofocus', 'LED flash'],
  secondaryCmera: ['2 MP', 'LED flash'],
  speaker: 'Yes',
  audioJack: 'Yes',
  wlan: 'Yes',
  bluetooth: 'Yes',
  gps: 'Yes with A-GPS GLONASS',
  nfc: '',
  radio: 'To be confirmed',
  usb: 'microUSB 2.0',
  sensors: ['Accelerometer', 'proximity'],
  battery: 'Non-removable Li-Ion battery',
  colors: ['Black/White'],
  options: {
    colors: [
      {
        code: 1000,
        name: 'Black/White',
      },
    ],
    storages: [
      {
        code: 2000,
        name: '4 GB',
      },
    ],
  },
};

export default mockedItemDetail;

export const definedMockedItemDetail = new ProductDetail(mockedItemDetail);
