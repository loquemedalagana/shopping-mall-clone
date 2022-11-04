import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage from 'src/components/error/ErrorPage';

const ErrorContainer = ({ is404 }) => {
  return <ErrorPage is404={is404} />;
};

ErrorContainer.propTypes = {
  is404: PropTypes.bool,
};

export default ErrorContainer;
