import { RouterProvider } from 'react-router-dom';

import { router } from 'src/App';

// eslint-disable-next-line react/prop-types
const ProviderForTests = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default ProviderForTests;
