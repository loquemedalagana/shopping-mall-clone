import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

import { isTest, isDev } from 'src/env';
import { appReducer } from 'src/stores/appStore';
import { productListReducer } from 'src/stores/productListStore';
import { productDetailReducer } from 'src/stores/productDetailStore';
import { cartReducer } from 'src/stores/cartStore';
import rootSaga from 'src/actions/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const appPersistentConfig = {
  key: 'app',
  storage: storageSession,
};

const rootReducer = combineReducers({
  app: persistReducer(appPersistentConfig, appReducer),
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
  devTools: isDev() || isTest(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).prepend(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default rootStore;
