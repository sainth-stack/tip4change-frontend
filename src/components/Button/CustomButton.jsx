import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  text = "Click Me", // Default text
  backgroundColor = "#847f3b",
  color,// Default background color
  hoverColor = "#5f6340", // Default hover color
  marginTop = -6.5, // Default margin top
  onClick, // Click handler
  ...sx // Spread other props
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        color:color,
        marginTop: marginTop,
        backgroundColor: backgroundColor,
        outline: "none",
        borderRadius: "1rem",
        textTransform: "none",
        ":hover": {
          backgroundColor: hoverColor,
        },
        ":focus": {
          outline: "none",
          boxShadow: "none",
        },
        ":active": {
          outline: "none",
          boxShadow: "none",
        },
      }}
      {...sx} // Pass any additional props
    >
      {text}
    </Button>
  );
};

export default CustomButton;
