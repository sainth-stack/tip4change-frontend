import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomImage from "../CustomImage/CustomImage";
import dragIcon from "../../assets/images/drag_image.png"
import CustomInput from "../CustomInput/CustomInput";

const DragAndDropFileInput = ({onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
  // console.log("file",file) e
    }
  };
  

  return (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        border: dragActive ? "3px dotted #847F3B" : "1.5px dotted #847F3B",
        borderRadius: "12px",
        maxWidth: {
          xs: "100%",
          sm: "80%",
          md: "300px",
          lg: "500px",
          xl: "800px",
        },
        height: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: dragActive ? "#f5f1e6" : "transparent",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
        margin: "auto",
      }}
    >
      <CustomInput
        type="file"
        id="fileInput"
        sx={{
          display: "none",
        }}
        onChange={handleFileChange}
      />

      <IconButton color="inherit" component="label" htmlFor="fileInput">
        <CustomImage
          src={dragIcon}
          alt="Upload"
          styles={{
            width: 40,
            height: 40,
            objectFit: "contain",
            filter: "grayscale(90%) opacity(50%)",
          }}
        />
      </IconButton>

      <Typography
        variant="body1"
        sx={{
          color: "#847F3B",
          fontWeight: "500",
          margin: "0.5rem 0  .5rem 0",
        }}
      >
        {selectedFile ? selectedFile.name : "Upload Image/Video"}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#000", fontWeight: "400", margin: "0.5rem 0  1rem 0" }}
      >
        Or
      </Typography>
      <Button
        variant="contained"
        component="label"
        htmlFor="fileInput"
        sx={{
          backgroundColor: "#847F3B",
          color: "white",
          textTransform: "none",
          borderRadius: "20px",
          padding: "4px 16px",
          "&:hover": {
            backgroundColor: "#8f7d4f",
          },
        }}
      >
        Browse
      </Button>
    </Box>
  );
};

export default DragAndDropFileInput;
