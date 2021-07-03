import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 18.001"
    >
      <defs>
        <clipPath id="a">
          <rect width="23" height="18.001" fill="none" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          d="M1,18a1,1,0,0,1-1-1v-.572a1,1,0,0,1,1-1H22a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1Zm0-7.715a1,1,0,0,1-1-1V8.714a1,1,0,0,1,1-1H13.375a1,1,0,0,1,1,1v.571a1,1,0,0,1-1,1ZM1,2.571a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H22a1,1,0,0,1,1,1v.572a1,1,0,0,1-1,1Z"
          fill={fill ? fill : "#000000"}
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
