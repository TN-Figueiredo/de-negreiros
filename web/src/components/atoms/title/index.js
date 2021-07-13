import React from "react";
import PropTypes from "prop-types";

import { Text } from "./title.styles";

const Title = ({ children, fontSize, color }) => {
  return (
    <Text fontSize={fontSize} color={color}>
      {children}
    </Text>
  );
};

Title.propTypes = {};

export default Title;
