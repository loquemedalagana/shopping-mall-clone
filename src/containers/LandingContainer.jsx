import React from 'react';
import { Navigate } from 'react-router-dom';

import { URL_PRODUCTS, URL_ROOT } from 'src/routes/routeURL';

const LandingContainer = () => {
  return <Navigate to={URL_ROOT + URL_PRODUCTS} replace />;
};

export default LandingContainer;
