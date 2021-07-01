import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "../header";
import Footer from "../../molecules/footer";

import theme from "../../../theme";
import { ThemeContainer } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContainer theme={theme} />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
