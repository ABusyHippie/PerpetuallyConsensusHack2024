import { WalletConnection } from ".";

export default {
  title: "Components/WalletConnection",
  component: WalletConnection,
  argTypes: {
    stateProp: {
      options: ["enabled", "press", "focus", "loading", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    name: "Tobias",
    address: "0x1234...5678",
    showIcon: true,
    connected: true,
    stateProp: "enabled",
    className: {},
  },
};
