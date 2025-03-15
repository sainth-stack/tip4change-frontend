import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";
import CustomTopBar from "./CustomTopBar";
import Sidebar from "./Sidebar";

const NewISidebarLayout = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const sidebarWidth = isMobile ? "4rem" : "10rem"; // Adjust sidebar width

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <aside
        style={{
          flexShrink: 0,
          width: sidebarWidth,
          borderRight: "1px solid #ddd",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "background.paper",
        }}
      >
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <Box
        sx={{
          ml: sidebarWidth, // Adjust margin-left based on sidebar width
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden", // Prevent unwanted scrollbars
        }}
      >
        {/* Top Bar */}
        <CustomTopBar isOverlapping={true} />

        <Container
          sx={{
            flexGrow: 1,
            p: 2,
            mt: 8,
            ml: 4, // Ensures content starts 4 units from sidebar
            minWidth: "calc(100% - .5rem)", // Adjusts width dynamically
            overflowX: "hidden", // Prevents horizontal scrollbar
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default NewISidebarLayout;
