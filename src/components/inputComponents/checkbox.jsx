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
      control={<Checkbox id={id} checked={checked} onChange={onChange} disabled={disabled} required={required} sx={{ ...sx }} />}
      label={<Typography sx={{ fontFamily: "Montserrat", color: "#000000" }}>{label}</Typography>}
    />
  );
};
