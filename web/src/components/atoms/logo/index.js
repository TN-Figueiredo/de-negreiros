import React from "react";
import PropTypes from "prop-types";

import { StyledSanityImage } from "./logo.styles";

const Logo = ({ logo, width, height, style, navbar = false }) => {
  return (
    <StyledSanityImage
      {...logo}
      alt="logo"
      style={style}
      width={width}
      height={height}
      // added toString() function because of warning complaining of boolean writing to the DOM
      navbar={navbar.toString()}
    />
  );
};

Logo.propTypes = {
  navbar: PropTypes.bool,
  logo: PropTypes.shape({}),
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.shape({}),
};

export default Logo;
