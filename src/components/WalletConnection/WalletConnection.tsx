/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
// import { IconWallet5 } from "../../icons/IconWallet5";
import { Avatar } from "../Avatar";
import { IconWallet5 } from "../../icons/IconWallet5";

interface Props {
  name?: string;
  address?: string;
  showIcon?: boolean;
  connected?: boolean;
  stateProp?: "enabled" | "press" | "focus" | "loading" | "hover" | "disabled";
  className?: any;
}

export const WalletConnection = ({
  name = "Tobias",
  address = "0x1234...5678",
  showIcon = true,
  connected,
  stateProp,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    connected: connected,

    state: stateProp || "enabled",
  });

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[var(--semantics-radius)] justify-center relative ${
        state.state === "focus" ? "border-2 border-solid" : ""
      } ${state.state === "focus" ? "border-[color:var(--semantics-ring)]" : ""} ${
        ["disabled", "loading"].includes(state.state) ? "opacity-40" : ""
      } ${state.connected ? "pl-2 pr-4 py-2" : "px-4 py-2"} ${
        state.state === "hover"
          ? "bg-[color:var(--semantics-secondary-secondary-hover)]"
          : ["focus", "press"].includes(state.state)
          ? "bg-semantics-secondary-secondary-focus"
          : "bg-[color:var(--semantics-secondary-secondary)]"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {showIcon && (
        <>
          <>
            {/* {!state.connected && <IconWallet5 className="!relative !w-4 !h-4" />} */}
            {!state.connected && <IconWallet5 className="!relative !w-4 !h-4" />}

            {state.connected && <Avatar avatar="generated" className="!h-6 bg-[url(/static/img/avatar-6.png)] !w-6" />}
          </>
        </>
      )}

      <div
        className={`font-body w-fit tracking-[var(--body-letter-spacing)] text-[length:var(--body-font-size)] [font-style:var(--body-font-style)] text-[color:var(--semantics-foreground)] relative font-[number:var(--body-font-weight)] whitespace-nowrap leading-[var(--body-line-height)] ${
          ["disabled", "enabled", "hover", "loading"].includes(state.state) ? "mt-[-1.00px]" : ""
        }`}
      >
        {!state.connected && <>Connect wallet</>}

        {state.connected && <>{address}</>}
      </div>
      {state.state === "loading" && (
        <div className="w-4 bg-[100%_100%] h-4 bg-[url(/static/img/progress-8.svg)] relative" />
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

WalletConnection.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  showIcon: PropTypes.bool,
  connected: PropTypes.bool,
  stateProp: PropTypes.oneOf(["enabled", "press", "focus", "loading", "hover", "disabled"]),
};
