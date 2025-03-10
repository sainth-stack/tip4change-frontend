// src/components/CustomTopBar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
const CustomTopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Gray shadow
        color: "#000",
        maxHeight: "3rem", // Responsive padding
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 .3rem", sm: "0 .5rem" }, // Responsive padding
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo Image */}
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            style={{
              height: "40px",
              margin: "-.5rem 0 0 0",
              boxShadow: "1px 0px 0px gray",
              marginLeft: "1.5rem",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomTopBar;
