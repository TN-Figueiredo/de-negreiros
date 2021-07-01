import React from "react";
import PropTypes from "prop-types";

import Menu from "./components/menu";
import Logo from "../../atoms/logo";
import Svg from "../../atoms/svg";

import { HeaderTag, Navbar, LogoContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderTag>
      <Svg name="upperWave" />
      <Navbar>
        <LogoContainer>
          <Logo width={500} style={{ height: 70 }} />
        </LogoContainer>
        {/* <Menu /> */}
      </Navbar>
    </HeaderTag>
  );
};

Header.propTypes = {};

export default Header;
