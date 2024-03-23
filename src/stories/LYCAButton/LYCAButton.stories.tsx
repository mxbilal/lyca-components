import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LYCAButton } from "./LYCAButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LYCA Components/LYCAButton",
  component: LYCAButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof LYCAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "outlined",
  },
};

export const Save: Story = {
  args: {
    label: "Button",
    variant: "save",
  },
};

export const Delete: Story = {
  args: {
    label: "Button",
    variant: "cancel",
  },
};
