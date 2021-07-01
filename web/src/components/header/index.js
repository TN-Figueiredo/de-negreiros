import React from "react";
import PropTypes from "prop-types";
import Logo from "../../../storybook/stories/atoms/Logo";

import { HeaderTag, Navbar } from "./header.styles";

const Header = () => {
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
