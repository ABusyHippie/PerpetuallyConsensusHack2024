/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  avatar: "initials" | "generated" | "custom" | "vault";
  className: any;
}

export const Avatar = ({ avatar, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-10 h-10 relative ${["custom", "generated", "vault"].includes(avatar) ? "bg-cover" : ""} ${
        avatar === "custom"
          ? "bg-[url(/static/img/avatar-custom.png)]"
          : avatar === "generated"
          ? "bg-[url(/static/img/avatar-generated.png)]"
          : avatar === "vault"
          ? "bg-[url(/static/img/avatar-vault.png)]"
          : ""
      } ${["custom", "initials", "vault"].includes(avatar) ? "rounded-[var(--semantics-special-round)]" : ""} ${
        ["custom", "generated", "vault"].includes(avatar) ? "bg-[50%_50%]" : ""
      } ${avatar === "initials" ? "bg-[color:var(--semantics-primary-primary)]" : ""} ${className}`}
    >
      {avatar === "initials" && (
        <div className="absolute h-4 top-[11px] left-2 [font-family:'Inter',Helvetica] font-normal text-semantics-primary-primary-foreground text-base text-center tracking-[0] leading-4 whitespace-nowrap">
          CN
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.oneOf(["initials", "generated", "custom", "vault"]),
};
