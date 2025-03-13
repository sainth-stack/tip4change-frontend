import React from "react";
import { Button, Icon, IconButton } from "@mui/material";
          import TuneIcon from "@mui/icons-material/Tune";

const CustomButton = ({
  text = "Click Me", // Default text
  backgroundColor = "",
  color,// Default background color
  hoverColor, // Default hover color
  marginTop = -6.5, // Default margin top
  onClick, // Click handler
  border,
  sx = {},
  iconExists// Spread other props
}) => {

  console.log("iconExists", iconExists);
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        color: color,
        border: border,
        marginTop: marginTop,
        backgroundColor: backgroundColor,
        outline: "none",
        padding: ".2rem 2rem",
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

        ...sx,
      }}
    >
      {iconExists && (
        <IconButton sx={{ color: "#fff", transform: "rotate(90deg)" }}>
          <TuneIcon />
        </IconButton>
      )}
      {text}
    </Button>
  );
};

export default CustomButton;
