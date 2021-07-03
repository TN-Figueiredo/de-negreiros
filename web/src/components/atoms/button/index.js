import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { StyledButton } from "./button.styles";

const Button = ({ label, url, variant }) => {
  return (
    <StyledButton onClick={() => navigate(url)} variant={variant}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {};

export default Button;
