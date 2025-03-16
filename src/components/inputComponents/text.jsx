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
            fontFamily: "Montserrat",
            color: "#847F3B",
            fontWeight: "500",
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
        fullWidth // Ensures the TextField expands
        sx={{
          borderRadius: "30px",
          height: "44px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            height: "44px",
            "& fieldset": {
              borderColor: "#a38e5d",
            },
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







// import React from "react";
// import { TextField, MenuItem, FormControlLabel, Checkbox, Radio, Typography } from "@mui/material";

// const CustomInput = ({
//   id = "",
//   rows,
//   type = "text",
//   label = "",
//   value = "",
//   onChange=()=>{},
//   required = false,
//   placeholder = "",
//   disabled = false,
//   options = [],
//   fullWidth = true,
//   multiple = false,
//   accept = "",
//   sx = {},
// }) => {
//   return (
//     <div style={{ marginBottom: "1rem", width: fullWidth ? "100%" : "auto"}}>
//       {label && (
//         <Typography
//           variant="body1"
//           sx={{ marginBottom: "0.20rem", fontWeight: 500, display:"flex",textAlign: "start", fontFamily:"Montserrat",padding:"10px"}}
//         >
//           {label}
//         </Typography>
//       )}
//       {type === "select" ? (
//         <TextField
//           id={id}
//           select
//           value={value}
//           onChange={onChange}
//           required={required}
//           disabled={disabled}
//           fullWidth={fullWidth}
//           variant="outlined"
//           sx={{
//             height: "44px",
//                   borderRadius: "30px",
//                   // borderWidth: "1px",
//                   // padding: "5px 10px",
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "40px",
//                     height: "40px",
//                     borderColor: "#847F3B",
//                     "&:hover fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                   },
//             ...sx,
//           }}
//         >
//           {options.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       ) : type === "checkbox" ? (
//         <FormControlLabel
//           control={<Checkbox id={id} checked={value} onChange={onChange} disabled={disabled} required={required} sx={{ ...sx }} />}
//           label={label}
//         />
//       ) : type === "radio" ? (
//         <FormControlLabel
//           control={<Radio id={id} checked={value} onChange={onChange} disabled={disabled} required={required} sx={{ ...sx }} />}
//           label={label}
//         />
//       ) : (
//         <TextField
//           id={id}
//           type={type}
//           value={value}
//           onChange={onChange}
//           required={required}
//           placeholder={placeholder}
//           disabled={disabled}
//           fullWidth={fullWidth}
//           variant="outlined"
//           multiline={type === "textarea"} // Enable multiline only for textarea
//           rows={rows || 4 }
//           sx={{
//             width: "100%",
//             ...(type === "textarea"
//               ? {
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "15px",
//                     minHeight: "100px",
//                     alignItems: "flex-start", // Aligns text to the top
//                     borderColor: "#847F3B",
//                     "&:hover fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                   },
//                   "& .MuiInputBase-input": {
//                     textAlign: "left",
//                     verticalAlign: "top",
//                     // padding: "0px",
//                     minHeight:"150px"
//                   },
//                 }
//               : {
//                   height: "44px",
//                   borderRadius: "30px",
//                   // borderWidth: "1px",
//                   // padding: "5px 10px",
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: "40px",
//                     height: "40px",
//                     borderColor: "#847F3B",
//                     "&:hover fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#847F3B",
//                     },
//                   },
//                 }),
//             ...sx,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CustomInput;
