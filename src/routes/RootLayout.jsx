import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import { DEVICE_MOBILE_WIDTH } from 'src/device/devices';
import { HEADER_HEIGHT } from 'src/components/header/constants';
import HeaderContainer from 'src/containers/HeaderContainer';
import { FOOTER_HEIGHT } from 'src/components/footer/constants';
import Footer from 'src/components/footer/Footer';

const RootLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  justify-content: stretch;

  a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: ${DEVICE_MOBILE_WIDTH}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .layout-space {
    width: 80%;
    @media screen and (max-width: ${DEVICE_MOBILE_WIDTH}px) {
      width: 90%;
    }
  }
`;

const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  height: fit-content;
`;

const Body = styled.main`
  display: flex;
  margin-top: ${HEADER_HEIGHT}px;
  align-items: flex-start;
  justify-content: center;
  min-height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
`;

const RootLayout = () => {
  return (
    <RootLayoutWrapper>
      <LayoutBox>
        <HeaderContainer />
        <Body>
          <Outlet />
        </Body>
        <Footer />
      </LayoutBox>
    </RootLayoutWrapper>
  );
};

export default RootLayout;
