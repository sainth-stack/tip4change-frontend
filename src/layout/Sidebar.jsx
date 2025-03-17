import React from "react";
import { Box, List, useMediaQuery } from "@mui/material";

import logo from "../assets/images/logo.png";

import CustomListItem from "./../components/CustomListItem/CustomListItem";
import CustomImage from "../components/CustomImage/CustomImage";

// For Payments

import dashboardSvg from "../assets/svg/dashboardIcon.svg";
import StorySvg from "../assets/svg/storyIcon.svg";
import ProjectsSvg from "../assets/svg/ProjectSvg.svg";
import ProgressSvg from "../assets/svg/chart-line-dataIcon.svg";
import PaymentSvg from "../assets/svg/cashIcon.svg";
import SettingsSvg from "../assets/svg/settingSVg.svg";
import LogoutSvg from "../assets/svg/logoutSvg.svg";



const sidebarConfig = {
  default: [
    // { name: "Dashboard", icon: dashboardSvg, path: "/dashboard" },
    { name: "Story", icon: StorySvg, path: "/story" },
    { name: "Projects", icon: ProjectsSvg, path: "/project" },
    {
      name: "Progress Tracking",
      icon: ProgressSvg,
      path: "/progress-tracking",
    },
    {
      name: "Payment Section",
      icon: PaymentSvg,
      path: "/payment-section",
    },
    // { name: "Payments", icon: PaymentSvg, path: "/payments" },
    { name: "Settings", icon: SettingsSvg, path: "/profile" },
    // { name: "Logout", icon: LogoutSvg, path: "/logout" },
  ],
};

function Sidebar() {
  // Media query to check screen size
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px) and (min-width: 601px)");

  // Adjust sidebar width based on screen size
  const sidebarWidth = isMobile ? 60 : isTablet ? 150 : 242;

  return (
    <Box
      sx={{
        width: sidebarWidth,
        height: "100%",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",

        flexShrink: 0,
        bgcolor: "background.paper",
        transition: "width 0.3s ease",
        display: "flex",
        zIndex: 1000,
        position: "absolute",
        flexDirection: "column",
      }}
    >
      {!isMobile && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomImage
            src={logo}
            
            alt="Logo"
            styles={{
              height: "40px",
              margin: ".8rem 0 0 .5rem",
              boxShadow: "1px 0px 0px gray",
              marginLeft: "1.5rem",
              marginBottom: "1.5rem"
            }}
          />
        </Box>
      )}

      {/* Sidebar Menu */}

      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <List sx={{ flexGrow: 1 }}>
          {sidebarConfig.default.slice(0, -1).map((item, index) => (
            <CustomListItem
              key={index}
              name={item.name}
              icon={item.icon}
              path={item.path}
              isMobile={isMobile}
            />
          ))}
        </List>
        
        <List>
          {sidebarConfig.default.slice(-1).map((item, index) => (
            <CustomListItem
              key={index}
              name={item.name}
              icon={item.icon}
              path={item.path}
              isMobile={isMobile}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
