import React, { useState } from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Typography,
  Popover,
} from "@mui/material";
import styled from "@emotion/styled";
import backIcon from "../assets/lyca/arrow-left.svg";
import arrow from "../assets/lyca/arrow.svg";
import {
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import withThemeProvider from "../WithTheme";

interface NavbarProps {
  title: string;
  user: {
    fullName: string;
    role: string;
    profileURL?: string;
  };
}

const ProfileDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ProfileContainerDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "12px",
  cursor: "pointer",
});

const LYCANavbar = ({ title, user }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  return (
    <Box
      sx={{ background: "white" }}
      p={3}
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" gap="10px" alignItems="center">
        <img src={backIcon} alt="back" style={{ cursor: "pointer" }} />
        <Typography variant="dashboardItem">{title}</Typography>
      </Box>
      <Box>
        <ProfileContainerDiv onClick={handleClick}>
          <Avatar sx={{ bgcolor: "#000" }}>A</Avatar>
          <ProfileDiv>
            <Typography
              variant="body1"
              fontWeight="bold"
              fontSize="14px"
              color="#11142D"
            >
              {user.fullName}
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              fontSize="13px"
              color="#808191"
            >
              {user.role}
            </Typography>
          </ProfileDiv>
          <ProfileDiv>
            <img src={arrow} alt="arrow" />
          </ProfileDiv>
        </ProfileContainerDiv>
        <Popover
          id={id}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          anchorEl={anchorEl}
          sx={{ position: "absolute", width: "16%" }}
        >
          <ListItem onClick={handleClose}>
            <ListItemButton sx={{ display: "flex", gap: "10px", px: 0 }}>
              <AccountCircleIcon color="action" />
              <ListItemText
                primary={<Typography variant="variant5">Profile</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={handleClose}>
            <ListItemButton sx={{ display: "flex", gap: "10px", px: 0 }}>
              <LogoutIcon color="action" />
              <ListItemText
                primary={<Typography variant="variant5">Logout</Typography>}
              />
            </ListItemButton>
          </ListItem>
        </Popover>
      </Box>
    </Box>
  );
};

export default withThemeProvider(LYCANavbar);
