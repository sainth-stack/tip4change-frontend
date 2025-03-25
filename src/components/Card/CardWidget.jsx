import React from "react";
import { Box } from "@mui/material";

const CardWidget = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "30px",

              boxShadow: "6px 6px 54px 0px rgba(0, 0, 0, 0.05)",


        padding: "16px",
        // margin: "10px",
        ...sx, // Allow custom styles via props
      }}
    >
      {children}
    </Box>
  );
};

export default CardWidget;
