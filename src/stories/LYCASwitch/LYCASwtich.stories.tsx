import { StoryObj, Meta } from "@storybook/react";
import UseSwitch from "./LYCASwitch";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof UseSwitch> = {
  title: "LYCA Components/LYCASwitch",
  component: UseSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   args: { onToggle: fn() },
};
export default meta;
type Story = StoryObj<typeof UseSwitch>;
export const Default: Story = {
  args: {
    isActive: true,
    label: "Active",
  },
  render: function Render() {
    const [{ isActive }, updateArgs] = useArgs();

    function onChange(v: any) {
      console.log(v);
      updateArgs({ isActive: v });
    }
    return <UseSwitch isActive={isActive} onToggle={onChange} />;
  },
};
