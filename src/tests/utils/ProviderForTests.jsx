import { RouterProvider } from 'react-router-dom';

import AppProvider from 'src/stores/AppProvider';
import { router } from 'src/App';

// eslint-disable-next-line react/prop-types
const ProviderForTests = ({ children }) => {
  return (
    <AppProvider>
      <RouterProvider router={router}>{children}</RouterProvider>
    </AppProvider>
  );
};

export default ProviderForTests;
