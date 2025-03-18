// src/components/CustomTopBar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import CustomImage from "../components/CustomImage/CustomImage";
import profile from "../assets/images/profile_avva.png";
import NotificationPopup from "./Notification";
import { useLocation, useNavigate } from "react-router-dom";
const CustomTopBar = ({ isOverlapping }) => {
  const location = useLocation();
   const navigate = useNavigate();

  const handleClose = (path) => {
    setAnchorEl(null);

    console.log("path",path)
    if (path) navigate(path); 
  };

  //dropdwon  logic----------------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

 
  //dropdwon  logic----------------


  const isMobile = useMediaQuery("(max-width:600px)"); // Mobile

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#000",
        height: "75px",
        width: isOverlapping
          ? isMobile
            ? "calc(100% - 5rem)"
            : "calc(100% - 15.2rem)"
          : "100%",
        transition: "all 0.3s ease",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: { },
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
                marginTop: "0px",
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "#f5f5f5",
                  color: "#847f3b",
                  height: "40px",
                  borderRadius: "50%",
                  width: "40px",
                  marginTop: "0px",
                }}
              >
                <NotificationPopup />
              </IconButton>
              <Avatar
                alt="Profile"
                src={profile}
                sx={{
                  boxShadow: 3,
                  mt: "-12px",
                  width: "45px",
                  height: "45px",
                }}
              />
            </Box>
          )}

          {location.pathname === "/" && (
            <>
              <Box
                // onMouseEnter={handleClick}
                // onMouseLeave={() => handleClose(null)}
                style={{ display: "inline-block" }}
              >
                <Avatar
                  alt="Profile"
                  src={profile}
                  sx={{
                    boxShadow: 1,
                    width: "45px",
                    height: "45px",
                    cursor: "pointer",
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick(event);
                  }}
                />

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => handleClose(null)}
                  sx={{ ml: 2 }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  disableScrollLock
                  disableAutoFocusItem
                >
                  <MenuItem onClick={() => handleClose("/brand/impact-claim")}>
                    Brand
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("/story")}>
                    User
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("/retail")}>
                    Retail
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomTopBar;
