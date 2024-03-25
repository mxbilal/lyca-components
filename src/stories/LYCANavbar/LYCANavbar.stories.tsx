import { StoryObj, Meta } from "@storybook/react";
import LYCANavbar from "./LYCANavbar";

const meta = {
  title: "LYCA Components/LYCANavbar",
  component: LYCANavbar,
  tags: ["autodocs"],
} satisfies Meta<typeof LYCANavbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => <LYCANavbar />,
  //   args: {
  //     columns: [
  //       { field: "id", headerName: "ID", flex: 0.01 },
  //       { field: "name", headerName: "Name", flex: 0.1 },
  //       { field: "age", headerName: "Age", flex: 0.1 },
  //     ],
  //     gridData: {
  //       data: [
  //         { id: 1, name: "John Doe", age: 30 },
  //         { id: 2, name: "Jane Smith", age: 25 },
  //         { id: 3, name: "Michael Johnson", age: 40 },
  //       ],
  //       totalPages: 1,
  //       totalRecords: 3,
  //     },
  //     pageChange: () => {}, // Replace with your pageChange function
  //     columnSort: () => {}, // Replace with your columnSort function
  //     loader: false,
  //   },
};

// export const WithActions: Story = {
//   args: {
//     ...Default.args,
//     action: true,
//   },
// };
