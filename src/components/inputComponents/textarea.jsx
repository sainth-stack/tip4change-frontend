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
          // borderRadius: "rem",
          minHeight: "100px",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "15px",
            "& fieldset": {
              borderColor: "#a38e5d",
            },
            borderColor: "#a38e5d",
            "&:hover fieldset": {
              borderColor: "#a38e5d",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#a38e5d",
            },
          },
          ...sx,
        }}
      />
    </div>
  );
};
