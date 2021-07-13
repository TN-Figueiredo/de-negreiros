import React from "react";
import PropTypes from "prop-types";

import Logo from "../../atoms/logo";
import Menu from "./components/menu";

import { HeaderTag, Navbar } from "./header.styles";

const Header = () => {
  return (
    <HeaderTag>
      <Navbar>
        <Logo />
        <Menu />
      </Navbar>
    </HeaderTag>
  );
};

Header.propTypes = {};

export default Header;
