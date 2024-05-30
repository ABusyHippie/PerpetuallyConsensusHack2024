import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["destructive", "icon", "outline", "primary", "subtle", "icon-circle", "ghost"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "press", "focus", "loading", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: false,
    label: "Button",
    type: "destructive",
    stateProp: "enabled",
    className: {},
  },
};
