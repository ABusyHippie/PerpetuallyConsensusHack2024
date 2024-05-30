import { NavigationItem } from ".";

export default {
  title: "Components/NavigationItem",
  component: NavigationItem,
  argTypes: {
    state: {
      options: ["active", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    badge: false,
    label: "Dashboard",
    state: "active",
    className: {},
  },
};
