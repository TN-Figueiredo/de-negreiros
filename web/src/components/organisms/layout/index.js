import PropTypes from "prop-types";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import useSiteSettings from "../../../hooks/useSiteSettings.hooks";
import theme from "../../../theme";
import Footer from "../../molecules/footer";
import Header from "../../molecules/header";
import MobileMenu from "../../molecules/mobileMenu";
import { ThemeContainer } from "./layout.styles";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { title, description, keywords } = useSiteSettings();

  const handleDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <ThemeProvider theme={theme}>
      <ThemeContainer theme={theme} />
      <Header handleDrawer={handleDrawer} /><Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Advocacia Negreiros"}</title>
        <meta name="keywords" content={keywords.join() || ""} />
        <meta
          name="url"
          property="og:url"
          content="https://advocacianegreiros.com.br"
        />
        <meta name="type" property="og:type" content="website" />
        <meta name="title" property="og:title" content={title || "Advocacia Negreiros"} />
        <meta
          name="description"
          property="og:description"
          content={description || ""}
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/impv9vga/production/17c6533df75f89492bd9bd8f3810886c49b5e5f5-8180x4271.png?w=500&q=75&fit=max&auto=format&dpr=2"
        />
      </Helmet>
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
