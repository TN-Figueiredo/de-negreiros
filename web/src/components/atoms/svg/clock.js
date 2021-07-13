import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18.169 18.169"
    >
      <path
        d="M9.084,0a9.084,9.084,0,1,0,9.084,9.084A9.111,9.111,0,0,0,9.084,0Zm0,15.9A6.813,6.813,0,1,1,15.9,9.084,6.833,6.833,0,0,1,9.084,15.9ZM10.22,8.63,13.286,11.7l-1.59,1.59L7.949,9.539V3.407H10.22Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
};

upperWave.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default upperWave;
