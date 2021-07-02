import React from "react";
import PropTypes from "prop-types";
import UpperWave from "./upperWave";
import BottomWave from "./bottomWave";
import FacebookStyled from "./facebookStyled";
import InstagramStyled from "./instagramStyled";

const icons = {
  upperWave: UpperWave,
  bottomWave: BottomWave,
  facebookStyled: FacebookStyled,
  instagramStyled: InstagramStyled,
};

const Svg = ({ name, fill = "#fff", width, height }) => {
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
