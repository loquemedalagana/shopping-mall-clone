import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate as PersistStore } from 'redux-persist/integration/react';

import rootStore from 'src/stores/rootStore';

const persist = persistStore(rootStore);

const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={rootStore}>
      <PersistStore persistor={persist}>{children}</PersistStore>
    </ReduxProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
