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
  rows = 3,
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
            alignItems: "flex-start", // Aligns the text to the top
            padding: 0, // Removes extra padding inside the input root
            ...sx, // Custom styles from props
            "& textarea": {
              margin: 0,
              paddingLeft: "10px",
              paddingTop:"10px", // Ensures text starts from top-left
              textAlign: "left",
              height: "100% !important", // Ensures the textarea fills the input
              boxSizing: "border-box", // Prevents overflow issues
            },
            "& fieldset": {
              borderColor: "#a38e5d",
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
