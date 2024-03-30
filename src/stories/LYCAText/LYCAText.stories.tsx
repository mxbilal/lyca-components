import type { Meta, StoryObj } from "@storybook/react";
import LYCAText from ".";

const meta: Meta = {
  title: "LYCA Components/LYCAText",
  component: LYCAText,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LYCAText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Sample Text",
  },
};

export const DashboardItem: Story = {
  args: { ...Default.args, variant: "dashboardItem" },
};

export const gridTitle: Story = {
  args: { ...Default.args, variant: "gridTitle" },
};

export const gridSub: Story = {
  args: { ...Default.args, variant: "gridSub" },
};
