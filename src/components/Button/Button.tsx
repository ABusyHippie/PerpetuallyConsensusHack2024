/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconMail9 } from "../../icons/IconMail9";

interface Props {
  showIcon?: boolean;
  label?: string;
  type?: "destructive" | "icon" | "outline" | "primary" | "subtle" | "icon-circle" | "ghost";
  stateProp?: "enabled" | "press" | "focus" | "loading" | "hover" | "disabled";
  className?: any;
  icon?: JSX.Element;
}

export const Button = ({
  showIcon = false,
  label = "Button",
  type,
  stateProp,
  className,
  icon = <IconMail9 className="!relative !w-4 !h-4" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    state: stateProp || "enabled",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2 justify-center relative ${
        state.state === "focus"
          ? "border-2 border-solid"
          : (state.state === "disabled" && state.type === "icon-circle") ||
            (state.state === "disabled" && state.type === "icon") ||
            (state.state === "disabled" && state.type === "outline") ||
            (state.state === "enabled" && state.type === "icon-circle") ||
            (state.state === "enabled" && state.type === "icon") ||
            (state.state === "enabled" && state.type === "outline") ||
            (state.state === "hover" && state.type === "icon-circle") ||
            (state.state === "hover" && state.type === "icon") ||
            (state.state === "hover" && state.type === "outline") ||
            (state.state === "loading" && state.type === "icon-circle") ||
            (state.state === "loading" && state.type === "icon") ||
            (state.state === "loading" && state.type === "outline") ||
            (state.state === "press" && state.type === "icon-circle") ||
            (state.state === "press" && state.type === "icon") ||
            (state.state === "press" && state.type === "outline")
          ? "border border-solid"
          : ""
      } ${
        state.state === "focus"
          ? "border-[color:var(--semantics-ring)]"
          : (state.state === "disabled" && state.type === "icon-circle") ||
            (state.state === "disabled" && state.type === "icon") ||
            (state.state === "disabled" && state.type === "outline") ||
            (state.state === "enabled" && state.type === "icon-circle") ||
            (state.state === "enabled" && state.type === "icon") ||
            (state.state === "enabled" && state.type === "outline") ||
            (state.state === "hover" && state.type === "icon-circle") ||
            (state.state === "hover" && state.type === "icon") ||
            (state.state === "hover" && state.type === "outline") ||
            (state.state === "loading" && state.type === "icon-circle") ||
            (state.state === "loading" && state.type === "icon") ||
            (state.state === "loading" && state.type === "outline") ||
            (state.state === "press" && state.type === "icon-circle") ||
            (state.state === "press" && state.type === "icon") ||
            (state.state === "press" && state.type === "outline")
          ? "border-[color:var(--semantics-border)]"
          : ""
      } ${["disabled", "loading"].includes(state.state) ? "opacity-40" : ""} ${
        ["icon-circle", "icon"].includes(state.type) ? "p-3" : "px-4 py-2"
      } ${
        state.type === "icon-circle" ? "rounded-[var(--primitives-number-96)]" : "rounded-[var(--semantics-radius)]"
      } ${
        state.type === "primary" && ["disabled", "enabled", "loading"].includes(state.state)
          ? "bg-[color:var(--semantics-primary-primary)]"
          : state.type === "primary" && state.state === "hover"
          ? "bg-semantics-primary-primary-hover"
          : state.type === "primary" && ["focus", "press"].includes(state.state)
          ? "bg-semantics-primary-primary-focus"
          : state.type === "subtle" && ["disabled", "enabled", "loading"].includes(state.state)
          ? "bg-[color:var(--semantics-secondary-secondary)]"
          : state.type === "subtle" && state.state === "hover"
          ? "bg-[color:var(--semantics-secondary-secondary-hover)]"
          : state.type === "subtle" && ["focus", "press"].includes(state.state)
          ? "bg-semantics-secondary-secondary-focus"
          : state.type === "outline" && ["disabled", "enabled", "loading"].includes(state.state)
          ? "bg-semantics-background"
          : (state.state === "hover" && state.type === "ghost") ||
            (state.state === "hover" && state.type === "icon-circle") ||
            (state.state === "hover" && state.type === "icon") ||
            (state.state === "hover" && state.type === "outline")
          ? "bg-semantics-ghost-ghost-hover"
          : (state.state === "focus" && state.type === "ghost") ||
            (state.state === "focus" && state.type === "icon-circle") ||
            (state.state === "focus" && state.type === "icon") ||
            (state.state === "focus" && state.type === "outline") ||
            (state.state === "press" && state.type === "ghost") ||
            (state.state === "press" && state.type === "icon-circle") ||
            (state.state === "press" && state.type === "icon") ||
            (state.state === "press" && state.type === "outline")
          ? "bg-semantics-ghost-ghost-focus"
          : state.type === "destructive" && ["disabled", "enabled", "loading"].includes(state.state)
          ? "bg-semantics-destructive-destructive"
          : state.type === "destructive" && state.state === "hover"
          ? "bg-semantics-destructive-destructive-hover"
          : state.type === "destructive" && ["focus", "press"].includes(state.state)
          ? "bg-semantics-destructive-destructive-focus"
          : "bg-[color:var(--semantics-ghost-ghost)]"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((state.state === "disabled" && state.type === "destructive") ||
        (state.state === "disabled" && state.type === "ghost") ||
        (state.state === "disabled" && state.type === "outline") ||
        (state.state === "disabled" && state.type === "primary") ||
        (state.state === "disabled" && state.type === "subtle") ||
        (state.state === "enabled" && state.type === "destructive") ||
        (state.state === "enabled" && state.type === "ghost") ||
        (state.state === "enabled" && state.type === "outline") ||
        (state.state === "enabled" && state.type === "primary") ||
        (state.state === "enabled" && state.type === "subtle") ||
        (state.state === "focus" && state.type === "destructive") ||
        (state.state === "focus" && state.type === "ghost") ||
        (state.state === "focus" && state.type === "outline") ||
        (state.state === "focus" && state.type === "primary") ||
        (state.state === "focus" && state.type === "subtle") ||
        (state.state === "hover" && state.type === "destructive") ||
        (state.state === "hover" && state.type === "ghost") ||
        (state.state === "hover" && state.type === "outline") ||
        (state.state === "hover" && state.type === "primary") ||
        (state.state === "hover" && state.type === "subtle") ||
        (state.state === "loading" && state.type === "icon-circle") ||
        (state.state === "loading" && state.type === "icon") ||
        (state.state === "press" && state.type === "destructive") ||
        (state.state === "press" && state.type === "ghost") ||
        (state.state === "press" && state.type === "outline") ||
        (state.state === "press" && state.type === "primary") ||
        (state.state === "press" && state.type === "subtle")) && (
        <div
          className={`relative ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state) ? "font-body-medium" : ""
          } ${state.state === "loading" ? "w-4" : "w-fit"} ${
            state.state === "disabled" ||
            state.state === "enabled" ||
            state.state === "hover" ||
            (state.state === "press" && state.type === "destructive") ||
            (state.state === "press" && state.type === "ghost") ||
            (state.state === "press" && state.type === "outline") ||
            (state.state === "press" && state.type === "primary")
              ? "mt-[-1.00px]"
              : ""
          } ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state)
              ? "tracking-[var(--body-medium-letter-spacing)]"
              : ""
          } ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state)
              ? "text-[length:var(--body-medium-font-size)]"
              : ""
          } ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state)
              ? "[font-style:var(--body-medium-font-style)]"
              : ""
          } ${state.state === "loading" ? "bg-[100%_100%]" : ""} ${
            state.type === "primary"
              ? "text-semantics-primary-primary-foreground"
              : state.type === "destructive"
              ? "text-semantics-destructive-destructive-foreground"
              : "text-[color:var(--semantics-foreground)]"
          } ${state.state === "loading" ? "h-4" : ""} ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state)
              ? "font-[number:var(--body-medium-font-weight)]"
              : ""
          } ${state.state === "loading" ? "bg-[url(/static/img/progress-8.svg)]" : ""} ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state) ? "whitespace-nowrap" : ""
          } ${
            ["disabled", "enabled", "focus", "hover", "press"].includes(state.state)
              ? "leading-[var(--body-medium-line-height)]"
              : ""
          }`}
        >
          {["disabled", "enabled", "focus", "hover", "press"].includes(state.state) && <>{label}</>}
        </div>
      )}

      {((state.state === "loading" && state.type === "destructive") ||
        (state.state === "loading" && state.type === "ghost") ||
        (state.state === "loading" && state.type === "outline") ||
        (state.state === "loading" && state.type === "primary") ||
        (state.state === "loading" && state.type === "subtle")) && (
        <>
          <div
            className={`w-4 bg-[100%_100%] h-4 relative ${
              state.type === "primary"
                ? "bg-[url(/static/img/progress.svg)]"
                : state.type === "destructive"
                ? "bg-[url(/static/img/progress-4.svg)]"
                : "bg-[url(/static/img/progress-8.svg)]"
            }`}
          />
          <div
            className={`font-body-medium w-fit mt-[-1.00px] tracking-[var(--body-medium-letter-spacing)] text-[length:var(--body-medium-font-size)] [font-style:var(--body-medium-font-style)] relative font-[number:var(--body-medium-font-weight)] whitespace-nowrap leading-[var(--body-medium-line-height)] ${
              state.type === "primary"
                ? "text-semantics-primary-primary-foreground"
                : state.type === "destructive"
                ? "text-semantics-destructive-destructive-foreground"
                : "text-[color:var(--semantics-foreground)]"
            }`}
          >
            {label}
          </div>
        </>
      )}

      {((state.state === "disabled" && state.type === "icon-circle") ||
        (state.state === "disabled" && state.type === "icon") ||
        (state.state === "enabled" && state.type === "icon-circle") ||
        (state.state === "enabled" && state.type === "icon") ||
        (state.state === "focus" && state.type === "icon-circle") ||
        (state.state === "focus" && state.type === "icon") ||
        (state.state === "hover" && state.type === "icon-circle") ||
        (state.state === "hover" && state.type === "icon") ||
        (state.state === "press" && state.type === "icon-circle") ||
        (state.state === "press" && state.type === "icon")) && <>{icon}</>}
    </button>
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

Button.propTypes = {
  showIcon: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["destructive", "icon", "outline", "primary", "subtle", "icon-circle", "ghost"]),
  stateProp: PropTypes.oneOf(["enabled", "press", "focus", "loading", "hover", "disabled"]),
};
