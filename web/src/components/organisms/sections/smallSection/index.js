import React from "react";
import PropTypes from "prop-types";
import { renderSectionOptions } from "../components";

import { Container } from "./smallSection.styles";

const SmallSection = (props) => {
  const { select, title } = props;
  return <Container>{renderSectionOptions[select](props)}</Container>;
};

SmallSection.propTypes = {};

export default SmallSection;
