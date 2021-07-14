import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 15"
    >
      <path
        d="M0,0V15H18V0ZM15.75,12.857H12.375L7.313,8.036,2.25,12.857V2.143h13.5Z"
        fill={fill}
        fill-rule="evenodd"
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
