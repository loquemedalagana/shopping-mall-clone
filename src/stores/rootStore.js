import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from 'src/stores/appStore';
import rootSaga from 'src/actions/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  app: appReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).prepend(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default rootStore;
