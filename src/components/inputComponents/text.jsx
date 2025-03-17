import React from "react";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

export const InputTextComponent = ({
  id = "",
  type = "text",
  label = "",
  value = "",
  onChange = () => {},
  required = false,
  placeholder = "",
  disabled = false,
  fullWidth = true,
  sx = {},
}) => {
  return (
    <div style={{ marginBottom: "1rem", width: "100%" }}>
      {" "}
      {/* Ensures the div takes full width */}
      {label && (
        <Typography
          variant="body1"
          sx={{
            marginBottom: "0.2rem",
            fontWeight: 500,
            fontFamily: "Montserrat",
            color: "#0E0E0E",
          
          }}
        >
          {label}
        </Typography>
      )}
<TextField
  id={id}
  type={type}
  value={value}
  onChange={onChange}
  required={required}
  placeholder={placeholder}
  disabled={disabled}
  fullWidth
  sx={{
    borderRadius: "20px",
    height: "44px",
    padding: "10px,14px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      height: "44px",
      "& fieldset": {
        borderColor: "#0E0E0E1", // Default border color (black)
      },
      "&:hover fieldset": {
        borderColor: "#847F3B", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "#847F3B", // Focus border color
      },
    },
    ...sx,
  }}
/>

    </div>
  );
};
