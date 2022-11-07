import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from 'src/actions/appActions';
import routes from 'src/routes/routes';

export const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.readCachedProductListData());
    dispatch(actions.readCachedProductDetailData());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
