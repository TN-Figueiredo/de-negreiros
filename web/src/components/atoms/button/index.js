import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import Svg from "../svg";

import { StyledButton, StyledIcon } from "./button.styles";

const renderIcon = (icon, iconFill) => (
  <StyledIcon>
    <Svg name={icon} fill={iconFill} />
  </StyledIcon>
);

const Button = ({ label, url, variant, icon, iconFill }) => {
  return (
    <StyledButton onClick={() => navigate(url)} variant={variant}>
      {label}
      {icon && renderIcon(icon, iconFill)}
    </StyledButton>
  );
};

Button.propTypes = {};

export default Button;
