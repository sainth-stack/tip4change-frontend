// layout/NewISidebarLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box, Container, Grid } from "@mui/material";
import CustomTopBar from "./CustomTopBar";

const NewISidebarLayout = () => {
  const isSidebarVisible = true;  // Control overlap based on this flag

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        sx={{
           boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
          width: "10rem",
          flexShrink: 0,
        bgcolor: "background.paper",  
          borderRight: "1px solid #ddd",
          height: "100vh",
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
          marginLeft: isSidebarVisible ? "10rem" : "0",
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
