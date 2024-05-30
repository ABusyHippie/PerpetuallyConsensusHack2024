import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    avatar: {
      options: ["initials", "generated", "custom", "vault"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    avatar: "initials",
    className: {},
  },
};
