import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1920.016 155.635"
    >
      <path
        d="M-2082.047,3555.953l.031,92.578s156.576,78.607,335.787,60.289c106.793-17.45,274.008-70.812,524.464-16.1,116.122,11.647,334.5-26.151,477.806-33.406,282.47-14.3,581.927,0,581.927,0V3555.984S-2081.933,3556.279-2082.047,3555.953Z"
        transform="translate(2082.047 -3555.953)"
        fill={fill}
        opacity="0.96"
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
