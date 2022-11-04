import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

// import { selectAppState } from 'src/stores/appStore';

const ErrorPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  min-height: 50vh;
`;

const ErrorContentBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  gap: 2.5rem;
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;

const ErrorPage = ({ is404 }) => {
  const navigate = useNavigate();
  // const appState = useSelector(selectAppState);

  let errorMessageComponent = (
    <>
      <h2>Algo salió mal..</h2>
      <h3>Por favor, vuelva a intentarlo.</h3>
    </>
  );

  if (is404) {
    errorMessageComponent = (
      <>
        <h2>Página no encontrada</h2>
        <h3>Lo sentimos, no podemos encontrar esa página.</h3>
      </>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ErrorPageBox id="error-page">
      <ErrorContentBox>
        <h1>Error..</h1>
        {errorMessageComponent}
        <Button id="go-back-button" variant="contained" onClick={handleGoBack}>
          Regresa
        </Button>
      </ErrorContentBox>
    </ErrorPageBox>
  );
};

ErrorPage.propTypes = {
  is404: PropTypes.bool,
};

export default ErrorPage;
