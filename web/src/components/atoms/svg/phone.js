import React from "react";
import PropTypes from "prop-types";
import whitePhone from "./whitePhone.png";

const Phone = ({ fill, width, height }) => {
  return (
    <img src={whitePhone} height={height} width={width} alt="white-phone" />
  );
};

Phone.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Phone;
