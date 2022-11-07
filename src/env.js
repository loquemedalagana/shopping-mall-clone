exports.isDev = () => process.env.NODE_ENV === 'development';
exports.isTest = () => process.env.NODE_ENV === 'test';

const APP_KEY = 'frolicking-moonbeam-50949b';
exports.APP_KEY = APP_KEY;
exports.APP__PRODUCT_LIST_KEY = `${APP_KEY}__product-list`;
exports.APP__PRODUCT_DETAIL_KEY = `${APP_KEY}__product-detail`;
exports.APP__CART_COUNT_KEY = `${APP_KEY}__product-count`;
