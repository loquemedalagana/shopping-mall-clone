import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import rootStore from 'src/stores/rootStore';
import { router } from 'src/App';

// eslint-disable-next-line react/prop-types
const ProviderForTests = ({ children }) => {
  return (
    <ReduxProvider store={rootStore}>
      <RouterProvider router={router}>{children}</RouterProvider>
    </ReduxProvider>
  );
};

export default ProviderForTests;
