/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  showBadge?: boolean;
  showIcon?: boolean;
  label?: string;
  selected?: boolean;
  className?: any;
}

export const TabItem = ({
  showBadge = false,
  showIcon = false,
  label = "Label",
  selected,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 h-8 rounded-[var(--semantics-radius)] relative ${
        selected ? "bg-semantics-background" : ""
      } ${className}`}
    >
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-sm font-medium leading-5 whitespace-nowrap relative ${
          !selected ? "text-semantics-muted-foreground" : "text-[color:var(--semantics-foreground)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

TabItem.propTypes = {
  showBadge: PropTypes.bool,
  showIcon: PropTypes.bool,
  label: PropTypes.string,
  selected: PropTypes.bool,
};
