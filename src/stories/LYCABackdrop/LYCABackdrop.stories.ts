import type { Meta, StoryObj } from "@storybook/react";
import LYCABackdrop from "./LYCABackdrop";

const meta = {
  title: "LYCA Components/LYCABackdrop",
  component: LYCABackdrop,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof LYCABackdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { open: true },
};
