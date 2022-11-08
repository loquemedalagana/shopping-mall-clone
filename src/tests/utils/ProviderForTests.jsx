import { RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppProvider from 'src/stores/AppProvider';
import { router } from 'src/App';

const ProviderForTests = ({ children }) => {
  return (
    <AppProvider>
      <RouterProvider router={router}>{children}</RouterProvider>
    </AppProvider>
  );
};

ProviderForTests.propTypes = {
  children: PropTypes.node,
};

export default ProviderForTests;
