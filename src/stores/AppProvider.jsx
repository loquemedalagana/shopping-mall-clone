import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';

import rootStore from 'src/stores/rootStore';

const AppProvider = ({ children }) => {
  return <ReduxProvider store={rootStore}>{children}</ReduxProvider>;
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
