import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import UseTabs, { UseTabsProps } from "./LYCATabs";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "LYCA Components/LYCATabs",
  component: UseTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { setTab: fn() },
} satisfies Meta<typeof UseTabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    tab: 0,
    list: [
      { label: "Tab 1", value: 0 },
      { label: "Tab 2", value: 1 },
      { label: "Tab 3", value: 2 },
    ],
  },
};
