import React from "react";
import PropTypes from "prop-types";

const discover = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <path
        d="M13.5,4.5,7.538,7.538,4.5,13.5l5.963-3.038ZM9,18a9,9,0,1,1,9-9A9.026,9.026,0,0,1,9,18Z"
        fill={fill}
        fill-rule="evenodd"
      />
    </svg>
  );
};

discover.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default discover;
