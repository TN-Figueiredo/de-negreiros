import React from "react";
import PropTypes from "prop-types";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";
import BottomWave from "./bottomWave";
import Clock from "./clock";
import FacebookStyled from "./facebookStyled";
import InstagramStyled from "./instagramStyled";
import Menu from "./menu";
import UpperWave from "./upperWave";
import Whatsapp from "./whatsapp";
import Phone from "./phone";

const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  clock: Clock,
  upperWave: UpperWave,
  bottomWave: BottomWave,
  facebookStyled: FacebookStyled,
  instagramStyled: InstagramStyled,
  menu: Menu,
  whatsapp: Whatsapp,
  phone: Phone,
};

const Svg = ({ name, fill, width = 16, height = 16 }) => {
  if (icons[name] === undefined) {
    return null;
  }

  const Icon = icons[name];
  return <Icon fill={fill} width={width} height={height} />;
};

Svg.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Svg;
