import React from "react";
import PropTypes from "prop-types";
import Svg from "../../atoms/svg";

import {
  Container,
  EndWave,
  StyledSanityImage,
  Overlay,
} from "./banner.styles";

const Banner = ({ background, bannerText, buttons }) => {
  const { alt } = background;
  return (
    <Container>
      <Overlay>
        <StyledSanityImage {...background} alt={alt} />
      </Overlay>
      {/* <Svg name="bottomWave" /> */}
      {/* <EndWave></EndWave> */}
    </Container>
  );
};

Banner.propTypes = {};

export default Banner;
