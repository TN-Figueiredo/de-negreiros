import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <defs>
        <clipPath id="a">
          <rect width="16" height="16" fill="none" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <rect width="16" height="16" fill="none" />
        <path
          d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
          transform="translate(-76 0.001)"
          fill={fill ? fill : "#000000"}
          fillRule="evenodd"
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
