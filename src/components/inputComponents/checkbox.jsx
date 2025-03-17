import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

export const CheckboxComponent = ({
  id = "",
  label = "",
  checked = false,
  onChange = () => {},
  required = false,
  disabled = false,
  sx = {},
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          sx={{
            color: "#A8A8A8", // Initial border color black
            "&.Mui-checked": {
              color: "#a38e5d", // Change to a38e5d when checked
            },
            "&.MuiCheckbox-root": {
              borderColor: "#A8A8A8", // Border color black initially
            },
            "&.Mui-checked.MuiCheckbox-root": {
              borderColor: "#a38e5d", // Border color when checked
            },
            ...sx,
          }}
        />
      }
      label={
        <Typography sx={{ fontFamily: "Montserrat", color: "#000000" }}>
          {label}
        </Typography>
      }
    />
  );
};
