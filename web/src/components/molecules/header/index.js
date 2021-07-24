import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import useSiteSettings from "../../../hooks/useSiteSettings.hooks";
import useTheme from "../../../hooks/useTheme.hooks";

import Menu from "./components/menu";
import Logo from "../../atoms/logo";
import Svg from "../../atoms/svg";

import {
  HeaderContainer,
  HeaderTag,
  Navbar,
  MobileMenuIcon,
  LogoContainer,
  SvgContainer,
} from "./header.styles";

const Header = ({ handleDrawer }) => {
  const { logo } = useSiteSettings();
  const theme = useTheme();
  return (
    <HeaderContainer>
      <HeaderTag>
        <Navbar>
          <MobileMenuIcon onClick={handleDrawer}>
            <Svg name="menu" height={16} fill={theme.colors.$grey700} />
          </MobileMenuIcon>
          <LogoContainer onClick={() => navigate("/")}>
            <Logo navbar logo={logo} width={500} />
          </LogoContainer>
          <Menu />
        </Navbar>
      </HeaderTag>
    </HeaderContainer>
  );
};

Header.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
};

export default Header;
