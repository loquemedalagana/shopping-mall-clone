import React from 'react';
import PropTypes from 'prop-types';

import Error from 'src/components/error/Error';

const ErrorContainer = ({ is404 }) => {
  return <Error isErrorPage is404={is404} />;
};

ErrorContainer.propTypes = {
  is404: PropTypes.bool,
};

export default ErrorContainer;
