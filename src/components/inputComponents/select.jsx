import React from "react";
import { TextField, MenuItem, Typography } from "@mui/material";

export const SelectComponent = ({
  id = "",
  label = "",
  value = "",
  onChange = () => {},
  required = false,
  disabled = false,
  options = [],
  fullWidth = true,
  placeholder = "Select",
  sx = {},
}) => {
  return (
    <div style={{ marginBottom: "1rem", width: fullWidth ? "100%" : "auto" }}>
      {label && (
        <Typography
          variant="body1"
          sx={{ marginBottom: "0.2rem", fontWeight: 500 ,fontFamily:"Montserrat"}}
        >
          {label}
        </Typography>
      )}
      <TextField
        id={id}
        select
        value={value || ""} // Ensure value is an empty string initially
        onChange={(event) => onChange({ target: { name: id, value: event.target.value } })} // Correct way for Formik
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        variant="outlined"
        SelectProps={{
          displayEmpty: true, // Enables showing placeholder when no value is selected
        }}
        sx={{
          borderRadius: "30px",
          height: "44px",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            height: "44px",
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
      >
        {/* Placeholder option */}
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
