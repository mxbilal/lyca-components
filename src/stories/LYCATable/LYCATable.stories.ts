import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import UseTable from ".";

const meta: Meta = {
  title: "LYCA Components/LYCATable",
  component: UseTable,
  tags: ["autodocs"],
  args: {
    onDelete: fn(),
    onEdit: fn(),
  },
} satisfies Meta<typeof UseTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "age", label: "Age" },
      { key: "email", label: "Email" },
    ],
    rows: [
      { name: "John", age: 30, email: "john@example.com" },
      { name: "Jane", age: 25, email: "jane@example.com" },
      { name: "Doe", age: 40, email: "doe@example.com" },
    ],
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    action: true,
  },
};
