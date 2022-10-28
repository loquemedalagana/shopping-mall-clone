import React from 'react';

import ErrorPage from 'src/pages/ErrorPage';
import HomePage from 'src/pages/HomePage';
import ProductDetailPage from 'src/pages/ProductDetailPage';
import * as routeURL from 'src/routes/routeURL';
import RootLayout from 'src/routes/RootLayout';

const routes = [
  {
    path: routeURL.URL_LANDING,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routeURL.URL_HOME,
        element: <HomePage />,
      },
      {
        path: routeURL.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
    ],
  },
];

export default routes;
