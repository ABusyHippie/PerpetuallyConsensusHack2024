/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconCheck2 = ({ color = "#1C1917", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M13.8047 3.52864C14.0651 3.78899 14.0651 4.2111 13.8047 4.47145L6.4714 11.8048C6.21106 12.0651 5.78894 12.0651 5.5286 11.8048L2.19526 8.47145C1.93491 8.2111 1.93491 7.78899 2.19526 7.52864C2.45561 7.26829 2.87772 7.26829 3.13807 7.52864L6 10.3906L12.8619 3.52864C13.1223 3.26829 13.5444 3.26829 13.8047 3.52864Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconCheck2.propTypes = {
  color: PropTypes.string,
};
