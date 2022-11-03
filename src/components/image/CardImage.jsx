import React, { useState } from 'react';
import styled from '@emotion/styled';

import { DEVICE_DESKTOP_WIDTH, DEVICE_MOBILE_WIDTH } from 'src/device/devices';

const CardImg = styled.img`
  align-self: center;
  max-width: 80%;
  @media screen and (min-width: ${DEVICE_MOBILE_WIDTH + 1}px) {
    max-width: 50%;
  }
`;

const CardImageNotLoaded = styled.div`
  align-self: center;
  width: 80%;
  height: 320px;

  padding-top: 1rem;
  @media screen and (min-width: ${DEVICE_MOBILE_WIDTH + 1}px) {
    height: 150px;
    width: 50%;
  }
  @media screen and (min-width: ${DEVICE_DESKTOP_WIDTH + 1}px) {
    height: 300px;
    width: 50%;
  }
  background: wheat;
  display: flex;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

const CardImage = ({ ...rest }) => {
  const [hasImageError, setHasImageError] = useState(false);

  const replaceImageWithError = e => {
    e.currentTarget.onerror = null;
    setHasImageError(true);
  };

  return hasImageError ? (
    <CardImageNotLoaded>No se puede cargar la imagen.</CardImageNotLoaded>
  ) : (
    <CardImg onError={replaceImageWithError} {...rest} />
  );
};

export default CardImage;
