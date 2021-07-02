import React from "react";
import PropTypes from "prop-types";
import SanityImage from "gatsby-plugin-sanity-image";

const Logo = ({ logo, width, height, style }) => {
  return (
    <SanityImage
      {...logo}
      alt="logo"
      width={width}
      height={height}
      style={style}
    />
  );
};

Logo.propTypes = {
  logo: PropTypes.shape({}),
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.shape({}),
};

export default Logo;
