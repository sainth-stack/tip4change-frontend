import React from "react";
import { TextField,InputLabel, MenuItem, FormControlLabel, Checkbox, Radio, Button } from "@mui/material";

const CustomInput = ({
    id = "",
    rows,
  type = "text",
  label = "",
  value = "",
  onChange,
  required = false,
  placeholder = "",
  disabled = false,
  options = [],
  fullWidth = true,
  multiple = false,
  accept = "",
  sx = {},
}) => {

 

  return (
    <>
      {type === "select" ? (

        <>
          <InputLabel id={"id"} sx={{
                color: "#847f3b",
           
         }}>{label}</InputLabel>
        <TextField
          id={id}
          select
          label={label}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
          variant="outlined"
          sx={{ marginBottom: "1rem", ...sx }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </>
      ) : type === "checkbox" ? (
        <FormControlLabel
          control={
            <Checkbox
              id={id}
              checked={value}
              onChange={onChange}
              disabled={disabled}
              required={required}
              sx={{ ...sx }}
            />
          }
          label={label}
        />
      ) : type === "radio" ? (
        <FormControlLabel
          control={
            <Radio
              id={id}
              checked={value}
              onChange={onChange}
              disabled={disabled}
              required={required}
              sx={{ ...sx }}
            />
          }
          label={label}
        />
      ):
                          
                           type === "textarea" ? (

              <> <InputLabel id={"id"} sx={{
                "margin": ".5rem",
                color: "#847f3b",
                ...sx
              }}>{label}</InputLabel>
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
            marginBottom: ".5rem",
            "& .MuiOutlinedInput-root": {
              borderRadius: "1rem",
               "& .MuiOutlinedInput-notchedOutline": {
       
               borderColor: "#85803c",
      },
            },
            
            ...sx,
          }}
        />
        </>
      ) :(
                <> <InputLabel id={"id"} sx={{
                  "margin": ".5rem",
                   color: "#847f3b",
                  ...sx
                }}>{label}</InputLabel>

        <TextField
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          fullWidth={fullWidth}
                    variant="outlined"
                     InputLabelProps={{ shrink: true }}

                    sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "2rem",
              "& .MuiOutlinedInput-notchedOutline": {
                
               borderColor: "#847f3b",
      },
      "& .MuiInputBase-input": {
        padding: ".3rem",
        // Adjust padding here
      },
            },
            ...sx,
          }}
        />
        </>
      )}
    </>
  );
};

export default CustomInput;
