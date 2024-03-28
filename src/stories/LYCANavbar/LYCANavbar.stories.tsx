import { StoryObj, Meta } from "@storybook/react";
import LYCANavbar from "./LYCANavbar";

const data = {
  id: 7,
  bio: "test",
  initial: "TA",
  fullName: "Test Administrators",
  phoneNumber: "8347834",
  email: "testadministrator@lyca.com",
  profileImagePath:
    "/1/ProfileImages/User/7/01a46a6c-4ca2-4106-963e-cfe122d8ab14_Screenshot2024-02-27105807.png",
  role: "Administrator",
};
const { fullName, role } = data;
const meta = {
  title: "LYCA Components/LYCANavbar",
  component: LYCANavbar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "tool",
      values: [{ name: "tool", value: "#f8f9ff" }],
    },
  },
} satisfies Meta<typeof LYCANavbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Dashboard",
    user: { fullName, role },
  },

  render: () => <LYCANavbar title="Dashboard" user={{ fullName, role }} />,
};
