import React from "react";
import { Box, List, useMediaQuery } from "@mui/material";

import logo from "../assets/images/logo.png";

import CustomListItem from "./../components/CustomListItem/CustomListItem";
import CustomImage from "../components/CustomImage/CustomImage";

// For Payments

import dashboardSvg from "../assets/svg/dashboardIcon.svg";
//svgs for /Usersidebar
import StorySvg from "../assets/svg/storyIcon.svg";
import ProjectsSvg from "../assets/svg/ProjectSvg.svg";
import ProgressSvg from "../assets/svg/chart-line-dataIcon.svg";
import PaymentSvg from "../assets/svg/cashIcon.svg";
import SettingsSvg from "../assets/svg/settingSVg.svg";
import LogoutSvg from "../assets/svg/logoutSvg.svg";
//svgs for /Usersidebar


//svgs for /brandsidebar
import ClaimSvg from "../assets/svg/claim.svg";
import ChainSvg from "../assets/svg/Chain.svg";
import SocialSvg from "../assets/svg/Social.svg";
import AnalyticsSvg from "../assets/svg/analytics-up.svg";
import ConsumerSvg from "../assets/svg/Consumer.svg";
import NewsSvg from "../assets/svg/news.svg";
import ProjectSvg from "../assets/svg/project.svg";
import UserGropupSvg from "../assets/svg/user-group.svg";







//svgs for /brandsidebar



//------sidebar settings--------------------------------

const sidebarConfigs = {
  "/": {
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
      { name: "Settings", icon: SettingsSvg, path: "/View-profile" },
       { name: "Logout", icon: LogoutSvg, path: "/logout" },
    ],
  },

  "/brand": {
    default: [
      { name: "Impact Claims", icon: ClaimSvg, path: "/brand/impact-claim" },
      {
        name: "Supply chain mapping",
        icon: ChainSvg,
        path: "/brand/supply-chain",
      },
      {
        name: "Social & material Passport ",
        icon: SocialSvg,
        path: "/brand/social-passport",
      },
      {
        name: "Analytics & Insights",
        icon: AnalyticsSvg,
        path: "/brand/analytics-insights",
      },
      // { name: "Payments", icon: PaymentSvg, path: "/payments" },
      {
        name: "Consumer Engagement",
        icon: ConsumerSvg,
        path: "/brand/consumer-engagement",
      },
      {
        name: "News & Updates",
        icon: NewsSvg,
        path: "/brand/news-updates",
      },
      {
        name: "Resources Library",
        icon: ProjectSvg,
        path: "/brand/resources-library",
      },

      {
        name: "Community Forum",
        icon: UserGropupSvg,
        path: "/brand/community-forum",
      },
      {
        name: "Logout",
        icon: LogoutSvg,
        path: "/brand/logout",
      },
    ],
  },
};

//------sidebar settings--------------------------------

const getSidebarConfig = (basePath='/') => {
  return sidebarConfigs[basePath] || { default: [] };
};

function Sidebar({ basePath }) {
  console.log("basePath", basePath);
  // Media query to check screen size
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px) and (min-width: 601px)");
const selectedSidebar = getSidebarConfig(basePath);
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
              marginBottom: "1.5rem",
            }}
          />
        </Box>
      )}

      {/* Sidebar Menu */}

      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <List sx={{ flexGrow: 1 }}>
          {selectedSidebar.default.slice(0, -1).map((item, index) => (
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
          {selectedSidebar.default.slice(-1).map((item, index) => (
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
