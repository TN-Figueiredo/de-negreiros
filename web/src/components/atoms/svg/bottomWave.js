import React from "react";
import PropTypes from "prop-types";

const upperWave = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1920.125 192.934"
    >
      <path
        d="M-1000,4682.059v23.7H-2920.08l-.044-93.522s179.049-100.167,231.96-99.407c16.879.242,26.221,2.537,38.4,7.567,14.617,6.038,27.4,15.784,35.667,22.013a94.6,94.6,0,0,0,8.9,6.116s32.692,28.08,110.588,36.607c20.387,2.232,51.489,5.839,76.976,4.007,122.526-8.8,309.745,22.789,461.017,48.208s296.964-55.8,314.323-65.716,64.476-92.375,299.444,34.1c41.974,22.593,71.3,40.024,96.424,52.342,52.8,25.885,76,31.181,91.429,34.145,17.332,3.33,8.6,3.48,35.955,5.889s27.1,1.933,52.934,0c15.55-1.163,31.047-5.533,38.378-7.582C-1008.54,4685.166-1000,4682.059-1000,4682.059Z"
        transform="translate(2920.125 -4512.829)"
        fill={fill}
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
