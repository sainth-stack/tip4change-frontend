import React from "react";
import { TextField, Typography } from "@mui/material";

export const TextareaComponent = ({
  id = "",
  label = "",
  value = "",
  onChange = () => {},
  required = false,
  placeholder = "",
  disabled = false,
  fullWidth = true,
  rows = 2,
  sx = {},
}) => {
  return (
    <div style={{ marginBottom: "1rem", width: fullWidth ? "100%" : "auto" }}>
      {label && (
        <Typography
          variant="body1"
          sx={{
            marginBottom: "0.2rem",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: "#847F3B",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        fullWidth={fullWidth}
        variant="outlined"
        multiline
        rows={rows}
        sx={{
          fontFamily: "Montserrat",
          "& .MuiOutlinedInput-root": {
            borderRadius: "15px",
            borderColor: "#a38e5d",
            padding: "12px", // Ensures text is inside the border
            minHeight: "100px", // Default height
            ...sx, // Custom styles
            "& textarea": {
              minHeight: "100px", // Ensures text input is correctly spaced
              padding: "10px", // Adjust text padding inside textarea
            },
            "& fieldset": {
              borderColor: "#0E0E0E1",
            },
            "&:hover fieldset": {
              borderColor: "#847F3B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#847F3B",
            },
          },
        }}
      />
    </div>
  );
};
