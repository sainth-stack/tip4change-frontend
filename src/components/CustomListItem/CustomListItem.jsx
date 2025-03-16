import React from "react";
import { ListItem, Tooltip, Icon, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CustomTypography from "../TypoGraphy/CustomTypography";
import CustomImage from "../CustomImage/CustomImage";

const CustomListItem = ({ name, icon, path, isMobile }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  // Media queries for responsive styles
  const isSmallScreen = useMediaQuery("(max-width:600px)");   // Mobile
  const isMediumScreen = useMediaQuery("(max-width:960px)");  // Tablet

  return (
    <Tooltip  placement="right">
      <ListItem
        button
        component={Link}
        to={path}
        sx={{
          "&:hover": {
            bgcolor: isActive ? "#6f692e" : "#a69f4e",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          },
          maxWidth: isSmallScreen ? "7rem" : isMediumScreen ? "9rem" : "11rem",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          padding: isMobile ? "0.3rem" : ".2rem",
          bgcolor: isActive ? "#847f3b" : "#fff",
          color: isActive ? "white" : "#4a4a4a",
          borderRadius: "2.5rem",
          margin: isSmallScreen ? "1rem .3rem 1.5rem .3rem" : ".5rem .5rem .0rem .5rem",
          transition: "all 0.3s ease",
          boxShadow: isActive ? "0 2px 5px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
      {typeof icon === "string" ? (
  <CustomImage
    src={icon}
    alt="icon"
    styles={{
      width: isSmallScreen ? "12px" : isMediumScreen ? "16px" : "20px",
      height: isSmallScreen ? "12px" : isMediumScreen ? "16px" : "20px",
      margin: isSmallScreen ? ".3rem" : ".5rem",
      transition: "transform 0.3s ease",
      transform: isActive ? "scale(1.1)" : "scale(1)",
      filter: isActive ? "invert(1)" : "invert(0)",
    }}
  />
) : (
  <Icon
    sx={{
      color: isActive ? "white" : "#0e0e0e",
      fontSize: isSmallScreen ? ".3rem" : isMediumScreen ? ".5rem" : ".8rem",
      margin: isSmallScreen ? ".3rem" : ".5rem",
      transition: "color 0.3s ease, transform 0.3s ease",
      transform: isActive ? "scale(1.1)" : "scale(1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {icon}
  </Icon>
)}


        {!isMobile && (
          <CustomTypography
            primary={name}
            sx={{
              fontSize: isSmallScreen ? "0.6rem" : isMediumScreen ? "0.75rem" : "0.9rem",
              fontWeight: "500",
              transition: "color 0.3s ease",
              color: isActive ? "white" : "#0E0E0E",
              whiteSpace: "nowrap",  // Prevent text wrapping
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </CustomTypography>
        )}
      </ListItem>
    </Tooltip>
  );
};

export default CustomListItem;
