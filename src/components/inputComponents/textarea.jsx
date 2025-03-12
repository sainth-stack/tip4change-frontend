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
        {label && <Typography variant="body1" sx={{ marginBottom: "0.2rem", fontWeight: 500,fontFamily:"Montserrat" }}>{label}</Typography>}
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
            borderRadius: "15px",
            minHeight: "100px",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              borderColor: "#847F3B",
              "&:hover fieldset": {
                borderColor: "#847F3B",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#847F3B",
              },
            },
            ...sx,
          }}
        />
      </div>
    );
  };
