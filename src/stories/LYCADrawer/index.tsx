import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Tooltip,
  Typography,
  Toolbar,
  Drawer,
} from "@mui/material";
import withThemeProvider from "../WithTheme";

interface SidebarItem {
  name: string;
  path: string;
  base: string;
  icon: string;
  selectedIcon: string;
}

interface LYCADrawerProps {
  sidebarItems: SidebarItem[];
  pathname: string;
  onItemClick: (path: string) => void;
}

const LYCADrawer = ({
  sidebarItems,
  pathname,
  onItemClick,
}: LYCADrawerProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "220px",
        },
      }}
      open
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", height: "250px" }}
      >
        <img src="/vite.svg" />
      </Toolbar>

      <List
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
        }}
      >
        {sidebarItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => onItemClick(item.path)}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Tooltip title={item.name} placement="right">
                  <img
                    src={item.path === pathname ? item.selectedIcon : item.icon}
                    alt={item.name}
                    width={20}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    color={item.path === pathname ? "white" : "#FFFFFF80"}
                    fontSize={14}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default withThemeProvider(LYCADrawer);
