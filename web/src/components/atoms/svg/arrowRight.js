import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30.776 61.445"
    >
      <g transform="translate(0.732 0.682)">
        <path
          d="M0,0,27.787,29.82l1.069,1.147.458.492"
          fill={fill ? fill : "#000000"}
          stroke="#fff"
          strokeWidth="2"
        />
        <line
          y1="29.313"
          x2="29.313"
          transform="translate(0 30.743)"
          fill={fill ? fill : "#000000"}
          stroke="#fff"
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
