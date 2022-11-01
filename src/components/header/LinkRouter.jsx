import React from 'react';
import { NavLink } from 'react-router-dom';

import MuiLink from '@mui/material/Link';

const LinkRouter = props => {
  return <MuiLink {...props} component={NavLink} />;
};

export default LinkRouter;
