import React from "react";
import PropTypes from "prop-types";

import { Container, LeftContent, RightContent } from "./mediumSection.styles";

const MediumSection = (props) => {
  console.log("props", props);
  return (
    <Container>
      <LeftContent>LeftContent</LeftContent>
      <RightContent>RightContent</RightContent>
    </Container>
  );
};

MediumSection.propTypes = {};

export default MediumSection;
