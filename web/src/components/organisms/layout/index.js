import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "../../molecules/header";
import MobileMenu from "../../molecules/mobileMenu";
import Footer from "../../molecules/footer";

import theme from "../../../theme";
import { ThemeContainer } from "./layout.styles";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <ThemeProvider theme={theme}>
      <ThemeContainer theme={theme} />
      <Header handleDrawer={handleDrawer} />
      {drawerOpen ? <MobileMenu /> : children}
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
