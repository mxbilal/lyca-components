import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import UseTabs from ".";
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
  render: function Render() {
    const [{ tab }, updateArgs] = useArgs();

    function onChange(v: any) {
      console.log(v);
      updateArgs({ tab: v });
    }
    return (
      <UseTabs
        tab={tab}
        list={[
          { label: "Tab 1", value: 0 },
          { label: "Tab 2", value: 1 },
          { label: "Tab 3", value: 2 },
        ]}
        setTab={onChange}
      />
    );
  },
};
