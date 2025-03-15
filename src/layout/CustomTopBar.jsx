// src/components/CustomTopBar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import CustomImage from "../components/CustomImage/CustomImage";
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import profile from "../assets/images/profile_avva.png";
import NotificationPopup from "./Notification";
const CustomTopBar = ({ isOverlapping }) => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Mobile

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#000",
        maxHeight: "3rem",
        width: isOverlapping
          ? isMobile
            ? "calc(100% - 4rem)"
            : "calc(100% - 10.1rem)"
          : "100%",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 .3rem", sm: "0 .5rem" },
        }}
      >
        {!isOverlapping && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomImage
              src={logo}
              alt="Logo"
              styles={{
                height: "40px",
                margin: "-.5rem 0 0 0",
                boxShadow: "1px 0px 0px gray",
                marginLeft: "1.5rem",
              }}
            />
          </Box>
        )}

        {isOverlapping && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginLeft: "auto",
              outline: "none",
            }}
          >
            <IconButton
              sx={{ bgcolor: "#f5f5f5", color: "#847f3b", mt: "-14px" }}
            >
              <NotificationPopup />
            </IconButton>
            <Avatar
              alt="Profile"
              src={profile}
              sx={{ boxShadow: 3, mt: "-12px", width: "45px", height: "45px" }}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomTopBar;
