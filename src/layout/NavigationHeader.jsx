import { Box, Breadcrumbs } from "@mui/material";
import React from "react";
import CustomTypography from "../components/TypoGraphy/CustomTypography";
import { StoryPageButtonData } from "../pages/StoryPage/data";
import CustomButton from "./../components/Button/CustomButton";
import { NavigationHeaderButtonData } from "./data";
import { Padding } from "@mui/icons-material";

const NavigationHeader = ({ path, PageText }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", maxWidth: "calc(100% - 2vw)" }}>
        <Box>
          <CustomTypography color="text.primary" sx={{ "fontWeight": "600" }}>
            {PageText}
          </CustomTypography>

          <Breadcrumbs separator="››" aria-label="breadcrumb">
            <CustomTypography color="text.primary">Dashboard</CustomTypography>
            {path.map((value, index) => (
              <CustomTypography key={index} color="text.primary">
                {value.includes("-")
                  ? value
                      .split("-")
                      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                      .join(" ")
                  : value.charAt(0).toUpperCase() + value.slice(1)}
              </CustomTypography>
            ))}
          </Breadcrumbs>
        </Box>

        {path && path === "payment-section" ? (
          <Box mt={1}>
            {NavigationHeaderButtonData.filter((field) => field.type === "button").map((button) => (
              <CustomButton
                iconExists={button.iconExists}
                key={button.id}
                color={button.color}
                text={button.text}
                border={button.border}
                backgroundColor={button.backgroundColor}
                hoverColor={button.hoverColor}
                marginTop={button.marginTop}
                onClick={button.onClick}
                sx={{
                  margin: "0 0 .3rem .5rem",
                  maxHeight: "2rem",
                  borderRadius: "5rem",
                }}
              />
            ))}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavigationHeader;
