import React from "react";
import PropTypes from "prop-types";
import UpperWave from "./upperWave";
import BottomWave from "./bottomWave";
import FacebookStyled from "./facebookStyled";
import InstagramStyled from "./instagramStyled";
import Menu from "./menu";

const icons = {
  upperWave: UpperWave,
  bottomWave: BottomWave,
  facebookStyled: FacebookStyled,
  instagramStyled: InstagramStyled,
  menu: Menu,
};

const Svg = ({ name, fill, width, height }) => {
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
