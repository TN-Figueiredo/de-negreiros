import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30.432 61.445"
    >
      <g transform="translate(0.732 0.707)">
        <line
          x2="28.968"
          y2="31.088"
          transform="translate(28.968 60.056) rotate(180)"
          fill={fill ? fill : "#000000"}
          stroke={fill ? fill : "#000000"}
          strokeWidth="2"
        />
        <line
          y1="28.968"
          x2="28.968"
          transform="translate(28.968 28.968) rotate(180)"
          fill={fill ? fill : "#000000"}
          stroke={fill ? fill : "#000000"}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

upperWave.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default upperWave;
