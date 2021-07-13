import React from "react";
import PropTypes from "prop-types";
import useSiteSettings from "../../../hooks/useSiteSettings.hooks";
import SanityImage from "gatsby-plugin-sanity-image";

const Logo = ({ width, height, style }) => {
  const {
    site: { logo },
  } = useSiteSettings();
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
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.shape({}),
};

export default Logo;
