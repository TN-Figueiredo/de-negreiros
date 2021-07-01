import React from "react";
import PropTypes from "prop-types";
import SanityImage from "gatsby-plugin-sanity-image";
import Svg from "../../atoms/svg";

import { Container, EndWave, imageStyle } from "./banner.styles";

const Banner = ({ background, bannerText, buttons }) => {
  const { alt } = background;
  return (
    <Container>
      <EndWave>
        <Svg name="bottomWave" />
        <SanityImage {...background} alt={alt} style={imageStyle} />
      </EndWave>
    </Container>
  );
};

Banner.propTypes = {};

export default Banner;
