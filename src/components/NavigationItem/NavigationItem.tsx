/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  badge?: boolean;
  label: string;
  state: "active" | "enabled";
  className: any;
}

export const NavigationItem = ({ badge = false, label = "Dashboard", state, className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-1 relative ${className}`}>
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-sm font-medium leading-5 whitespace-nowrap relative ${
          state === "active" ? "text-[color:var(--semantics-foreground)]" : "text-semantics-muted-foreground"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

NavigationItem.propTypes = {
  badge: PropTypes.bool,
  label: PropTypes.string,
  state: PropTypes.oneOf(["active", "enabled"]),
};
