import React from "react";
import PropTypes from "prop-types";
import { renderSectionOptions } from "../components";

import { Container } from "./mediumSection.styles";

const MediumSection = (props) => {
  const { select } = props;
  return <Container>{renderSectionOptions[select](props)}</Container>;
};

MediumSection.propTypes = {};

export default MediumSection;
