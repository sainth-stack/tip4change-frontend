import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CustomInput = ({ 
  label, type, name, onChange, value, placeholder, 
  multiline = false, rows = 3, sx = {} 
}) => {
  return (
    <Box sx={{ width: "100%", my: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: 500, mb: "8px", ml: "10px" }}>
        {label}
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        type={type !== "textarea" ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={type === "textarea" ? true : multiline}
        rows={type === "textarea" ? rows : 1}
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            border: "1px solid #0E0E0E",
            padding: type === "textarea" ? "10px 14px" : "0px 14px",
            height: type === "textarea" ? "auto" : "40px", 
            minHeight: type === "textarea" ? "100px" : "40px",
            borderRadius: type === "textarea" ? "12px" : "70px",
            display: "flex",
            alignItems: type === "textarea" ? "flex-start" : "center",
            transition: "border-color 0.3s",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0E0E0E !important",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0E0E0E",
          },
          "& textarea": {
            resize: "vertical",
            padding: "10px",
            minHeight: "30px",
            width: "100%",
          },
          ...sx, 
        }}
      />
    </Box>
  );
};

export default CustomInput;
