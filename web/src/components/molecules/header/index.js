import React from "react";
import PropTypes from "prop-types";
import Logo from "../../atoms/logo";

import { HeaderTag, Navbar } from "./header.styles";

const Header = (props) => {
  return (
    <HeaderTag>
      <Navbar>
        <Logo />
        Início Blog Sobre nós Contato
      </Navbar>
    </HeaderTag>
  );
};

Header.propTypes = {};

export default Header;
