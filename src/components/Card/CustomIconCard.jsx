// src/components/CustomIconCard.jsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const CustomIconCard = ({ icon, text }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "16px",
        textAlign: "center",
        borderRadius: "50%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box>
        <img src={icon} alt={text} style={{ width: "40px", height: "40px" }} />
        <Typography variant="body2" sx={{ marginTop: "8px" }}>
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CustomIconCard;
