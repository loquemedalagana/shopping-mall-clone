import React from 'react';

import ErrorContainer from 'src/containers/ErrorContainer';
import LandingContainer from 'src/containers/LandingContainer';
import ProductListContainer from 'src/containers/ProductListContainer';
import ProductDetailContainer from 'src/containers/ProductDetailContainer';
import * as routeURL from 'src/routes/routeURL';
import RootLayout from 'src/routes/RootLayout';

const routes = [
  {
    path: routeURL.URL_ROOT,
    element: <RootLayout />,
    errorElement: <ErrorContainer />,
    children: [
      {
        path: routeURL.URL_ROOT,
        element: <LandingContainer />,
      },
      {
        path: routeURL.URL_PRODUCTS,
        element: <ProductListContainer />,
        index: true,
      },
      {
        path: routeURL.URL_PRODUCT_DETAIL,
        element: <ProductDetailContainer />,
      },
      {
        path: routeURL.URL_ERROR,
        element: <ErrorContainer />,
      },
      { path: routeURL.URL_NOT_FOUND, element: <ErrorContainer is404 /> },
    ],
  },
];

export default routes;
