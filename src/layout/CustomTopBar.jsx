// src/components/CustomTopBar.jsx
import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import CustomImage from "../components/CustomImage/CustomImage";

const CustomTopBar = ({ isOverlapping }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#000",
        maxHeight: "3rem",
        width: isOverlapping ? "calc(100% - 10.1rem)" : "100%",  
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
        
        {!isOverlapping&& <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </Box>}
         
      </Toolbar>
    </AppBar>
  );
};

export default CustomTopBar;
