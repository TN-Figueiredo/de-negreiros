import React from "react";
import PropTypes from "prop-types";
import { renderSectionOptions } from "../components";

import { Container, Overlay, StyledSanityImage } from "./smallSection.styles";

const SmallSection = (props) => {
  const { select, background, title } = props;
  return (
    <Container background={background}>
      <Overlay background={background}>
        {background?.asset && <StyledSanityImage {...background} />}
        {renderSectionOptions[select](props)}
      </Overlay>
    </Container>
  );
};

SmallSection.propTypes = {};

export default SmallSection;
