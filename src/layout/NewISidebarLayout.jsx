import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid2, useMediaQuery } from "@mui/material";
import CustomTopBar from "./CustomTopBar";
import Sidebar from "./Sidebar";

const NewISidebarLayout = ({basePath}) => {
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
        <Sidebar basePath={basePath} />
      </aside>

      {/* Main Content Area */}
      <Box
        sx={{
          ml: sidebarWidth,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Bar */}
        <CustomTopBar isOverlapping={true} />

        <Grid2
          padding={"40px"}
          sx={{
            mt: 10,
            ml: {
              xs: 4,
              sm: ".1rem",
              md: "2rem",
              lg: "4rem",
              xl: "4rem",
            },
            maxWidth: {
              xs: "calc(100% - 1em)",
              sm: "calc(100% - 1em)",
              md: "calc(100% - 1em)",
              lg: "calc(100% -2rem)",
              xl: "calc(100% - 2rem)",
            },
          }}
        >
          <Outlet />
        </Grid2>
      </Box>
    </Box>
  );
};

export default NewISidebarLayout;
