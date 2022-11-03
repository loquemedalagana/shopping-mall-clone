import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const itemLoader = keyframes`
  0% {
    box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
  }
`;

const ItemLoader = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #abd9ff;
  box-sizing: border-box;
  animation: ${itemLoader} 1s linear infinite alternate;
`;

const DotSpinner = () => {
  return <ItemLoader id="item-loading" />;
};

export default DotSpinner;
