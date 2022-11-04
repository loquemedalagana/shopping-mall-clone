import React from 'react';
import styled from '@emotion/styled';

import BreadCrumbs from 'src/components/header/BreadCrumbs';
import CartCount from 'src/components/header/CartCount';
import { HEADER_HEIGHT } from 'src/components/header/constants';

const HeaderBox = styled.header`
  left: 0;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f9ceee;
  position: fixed;
  z-index: 10;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inherit;
    }
  }
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRightSection = styled.div``;

const Header = () => {
  return (
    <HeaderBox>
      <HeaderBody className="layout-space">
        <BreadCrumbs />
        <HeaderRightSection>
          <CartCount />
        </HeaderRightSection>
      </HeaderBody>
    </HeaderBox>
  );
};

Header.prototype = {};

export default Header;
