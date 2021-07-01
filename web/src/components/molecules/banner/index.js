import React from "react";
import PropTypes from "prop-types";
import SanityImage from "gatsby-plugin-sanity-image";
import Svg from "../../atoms/svg";

import { Container, imageStyle, EndWave } from "./banner.styles";

const Banner = (props) => {
  return (
    <Container>
      <EndWave>
        <Svg name="bottomWave" />
      </EndWave>
    </Container>
  );
};

Banner.propTypes = {};

export default Banner;
