import React from 'react';
import { useLocation } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import LinkRouter from 'src/components/header/LinkRouter';
import { URL_ROOT, URL_PRODUCTS } from 'src/routes/routeURL';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(path => path);
  const is404 = !pathnames.includes(URL_PRODUCTS);

  return (
    <MuiBreadcrumbs>
      <LinkRouter underline="hover" color="inherit" to={URL_ROOT}>
        Home
      </LinkRouter>
      {!is404 &&
        pathnames.map((value, index) => {
          const lastIndex = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return lastIndex ? (
            <Typography color="#277BC0" key={to}>
              {`${value.slice(0, 1).toUpperCase()}${value.slice(1)}`}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {`${value.slice(0, 1).toUpperCase()}${value.slice(1)}`}
            </LinkRouter>
          );
        })}
      {is404 && <Typography color="#277BC0">404 Not Found</Typography>}
    </MuiBreadcrumbs>
  );
};

export default BreadCrumbs;
