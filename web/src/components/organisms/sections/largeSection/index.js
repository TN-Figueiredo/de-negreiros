import React from "react";
import PropTypes from "prop-types";
import { renderSectionOptions } from "../components";

import { Container } from "./largeSection.styles";

const LargeSection = (props) => {
  const { select } = props;
  return <Container>{renderSectionOptions[select](props)}</Container>;
};

LargeSection.propTypes = {};

export default LargeSection;
