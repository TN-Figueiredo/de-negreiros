import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import Footer from "../footer";

import theme from "../../theme";
import { ThemeContainer, StyledContainer } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <ThemeContainer theme={theme} />
      <Header />
      {children}
      <Footer />
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
