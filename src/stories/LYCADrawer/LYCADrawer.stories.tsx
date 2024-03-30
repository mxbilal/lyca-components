import { StoryObj, Meta } from "@storybook/react";
import LYCADrawer from ".";
import service from "../assets/lyca/sidebar/service.svg";
import serviceSelected from "../assets/lyca/sidebar/service_white.svg";
import jobs from "../assets/lyca/sidebar/jobs.svg";
import jobsSelected from "../assets/lyca/sidebar/jobs_white.svg";
import { fn } from "@storybook/test";

const Sidebar = [
  {
    name: "Service",
    path: "/service",
    base: "service",
    icon: service,
    selectedIcon: serviceSelected,
  },
  {
    name: "Jobs",
    path: "/jobs",
    base: "jobs",
    icon: jobs,
    selectedIcon: jobsSelected,
  },
];
const meta: Meta = {
  title: "LYCA Components/LYCADrawer",
  component: LYCADrawer,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "tool",
      values: [{ name: "tool", value: "#f8f9ff" }],
    },
  },
  args: { onItemClick: fn() },
} satisfies Meta<typeof LYCADrawer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { sidebarItems: Sidebar, pathname: "/service" },

  render: () => (
    <LYCADrawer
      sidebarItems={Sidebar}
      onItemClick={(path) => console.log(path)}
      pathname="/service"
    />
  ),
};
