import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import Svg from "../svg";
import useSiteSettings from "../../../hooks/useSiteSettings.hooks";

import { StyledButton, StyledIcon } from "./button.styles";

const renderIcon = (icon, iconFill) => (
  <StyledIcon>
    <Svg name={icon} fill={iconFill} height={24} width={24} />
  </StyledIcon>
);

const handleClick = (url, site, icon) => {
  const { whatsapp, whatsappMessage } = site;
  if (icon === "whatsapp") {
    return window.open(
      `https://api.whatsapp.com/send?l=pt_br&phone=55${whatsapp}&text=${whatsappMessage}`
    );
  } else {
    return navigate(url);
  }
};

const Button = ({ children, url, variant, icon, iconFill, full, onClick }) => {
  const site = useSiteSettings();
  return (
    <StyledButton
      onClick={onClick ? onClick : () => handleClick(url, site, icon)}
      variant={variant}
      full={full}
    >
      {children}
      {icon && renderIcon(icon, iconFill)}
    </StyledButton>
  );
};

Button.propTypes = {};

export default Button;
