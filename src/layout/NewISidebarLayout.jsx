// layout/NewISidebarLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import CustomTopBar from "./CustomTopBar";

const NewISidebarLayout = () => {
  const isMobile = useMediaQuery("(max-width:600px)");   // Mobile

  const isSidebarVisible = true;  // Control overlap based on this flag

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        sx={{
           boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
          width: isMobile ? "4rem" : "10rem",
          flexShrink: 0,
        bgcolor: "background.paper",  
          borderRight: "1px solid #ddd",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        
        <Sidebar />
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          marginLeft: isMobile ? "4rem" : "10rem",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Pass isOverlapping prop */}
        <CustomTopBar isOverlapping={isSidebarVisible} />

        <Container sx={{ flexGrow: 1, p: 1, mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default NewISidebarLayout;
