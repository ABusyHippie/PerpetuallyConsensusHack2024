/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const MobiusBackground = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="236"
      viewBox="0 0 1128 236"
      width="1128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1920_2430)" opacity="0.15">
        <path
          d="M633.93 160.338C656.352 148.48 678.987 136.36 701.836 123.972C1814.6 -479.335 2422.48 -447.249 2422.48 -447.249L2402.87 277.662C1830.75 129.868 1356.33 78.6759 633.93 160.338Z"
          fill="url(#paint0_linear_1920_2430)"
        />
        <path
          d="M-1016.23 690.288C-1016.23 690.288 -433.182 721.063 635.881 160.526C26.3111 137.712 -443.156 82.0128 -978.838 -18.0498L-1016.23 690.288Z"
          fill="url(#paint1_linear_1920_2430)"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1920_2430"
          x1="994.464"
          x2="1243.35"
          y1="340.829"
          y2="-249.963"
        >
          <stop stopColor="#C7D2FE" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1920_2430"
          x1="-252.163"
          x2="529.907"
          y1="537.356"
          y2="114.945"
        >
          <stop />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
        <clipPath id="clip0_1920_2430">
          <rect fill="white" height="1295.51" transform="translate(-206.752 -831.64) rotate(13.5405)" width="2072.82" />
        </clipPath>
      </defs>
    </svg>
  );
};
