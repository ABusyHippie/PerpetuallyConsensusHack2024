/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconCheckCheck = ({ className }: Props): JSX.Element => {
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
        d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L7 15.5858L2.70711 11.2929C2.31658 10.9024 1.68342 10.9024 1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L18.7071 6.70711Z"
        fill="#1C1917"
      />
      <path
        d="M22.7071 10.7071C23.0976 10.3166 23.0976 9.68342 22.7071 9.29289C22.3166 8.90237 21.6834 8.90237 21.2929 9.29289L14.5 16.0858L13.7071 15.2929C13.3166 14.9024 12.6834 14.9024 12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071L13.7929 18.2071C14.1834 18.5976 14.8166 18.5976 15.2071 18.2071L22.7071 10.7071Z"
        fill="#1C1917"
      />
    </svg>
  );
};
