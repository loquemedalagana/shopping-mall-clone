import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { HEADER_HEIGHT } from 'src/components/header/constants';
import { FOOTER_HEIGHT } from 'src/components/footer/constants';

const LoadingPageBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  align-items: center;
  justify-content: center;
`;

const pageLoading = keyframes`
  0% , 20% {
    opacity: 1;
    letter-spacing: 2px;
  }
  80% , 100% {
    opacity: 0;
    letter-spacing: 32px;
  }
`;

const PageLoader = styled.span`
  font-size: 48px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #abd9ff;
  box-sizing: border-box;
  animation: ${pageLoading} 2s linear infinite alternate;
`;

const TextSpinner = () => {
  return (
    <LoadingPageBox id="page-loading">
      <PageLoader>Cargando</PageLoader>
    </LoadingPageBox>
  );
};

export default TextSpinner;
