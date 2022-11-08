import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ErrorTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  gap: 32px;

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
`;

const ErrorElement = ({ is404 }) => {
  let errorMessageComponent = <p>Algo salió mal..</p>;

  if (is404) {
    errorMessageComponent = <p>Lo sentimos, no podemos encontrar lo que quiera.</p>;
  }

  return <ErrorTextBox>{errorMessageComponent}</ErrorTextBox>;
};

ErrorElement.propTypes = {
  is404: PropTypes.bool,
};

export default ErrorElement;
