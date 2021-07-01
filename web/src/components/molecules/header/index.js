import React from "react";
import PropTypes from "prop-types";

import Menu from "./components/menu";
import Logo from "../../atoms/logo";
import Svg from "../../atoms/svg";

import {
  HeaderTag,
  Navbar,
  LogoContainer,
  SvgContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderTag>
      <Navbar>
        <LogoContainer>
          <Logo width={500} style={{ height: 70 }} />
        </LogoContainer>
        <Menu />
      </Navbar>
      <SvgContainer>
        <Svg name="upperWave" />
      </SvgContainer>
    </HeaderTag>
  );
};

Header.propTypes = {};

export default Header;
