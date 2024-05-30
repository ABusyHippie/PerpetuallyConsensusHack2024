/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconCopy = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4C16 3.20435 15.6839 2.44129 15.1213 1.87868C14.5587 1.31607 13.7956 1 13 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V13C1 13.7956 1.31607 14.5587 1.87868 15.1213C2.44129 15.6839 3.20435 16 4 16H5C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V4C3 3.73478 3.10536 3.48043 3.29289 3.29289Z"
        fill="#1C1917"
      />
      <path
        clipRule="evenodd"
        d="M11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11ZM10 11C10 10.4477 10.4477 10 11 10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V11Z"
        fill="#1C1917"
        fillRule="evenodd"
      />
    </svg>
  );
};
