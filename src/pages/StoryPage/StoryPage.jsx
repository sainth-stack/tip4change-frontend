import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import NavigationHeader from "../../layout/NavigationHeader";
import { StoryPageButtonData, StoryPageUiFileds } from "./data";
import DragAndDropFileInput from "../../components/DragAndDropFileInput/DragAndDropFileInput";
import CustomButton from "../../components/Button/CustomButton";
import { InputTextComponent } from "../../components/inputComponents/text";
import { TextareaComponent } from "../../components/inputComponents/textarea";

const StoryPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileSelect = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      fileInput: files[0],
    }));
  };


  return (
    <>
      <Box>
        <NavigationHeader path={pathnames} PageText="Story Upload" />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          //  minHeight: "calc(100vh - 100px)",
          Width: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "80%",
              md: "300px",
              lg: "500px",
              xl: "800px",
            },
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {StoryPageUiFileds.map((field) => (
            <Grid
              item
              xs={12}
              key={field.id}
              md={["ProductTitle", "productCode"].includes(field.id) ? 6 : 12}
            >
              {field.type === "file" ? (
                <DragAndDropFileInput onFileSelect={handleFileSelect} />
              ) : field.type === "text" ? (
                <InputTextComponent
                  id={field.id}
                  type={field.type}
                  label={field.label}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                  sx={{ width: "100%" }}
                />
              ) : field.type === "textarea" ? (
                <TextareaComponent
                  id={field.id}
                  label={field.label}
                  rows={field.rows || 4}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  sx={{ width: "100%", borderRadius: "2rem" }}
                />
              ) : null}
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "80%",
              md: "300px",
              lg: "500px",
              xl: "800px",
            },
            marginTop: 4,
            justifyContent: "flex-end",
          }}
        >
          <Grid item sx={{ display: "flex", gap: "1rem" }}>
            {StoryPageButtonData.filter((field) => field.type === "button").map(
              (button) => (
                <CustomButton
                  key={button.id}
                  color={button.color}
                  text={button.text}
                  border={button.border}
                  backgroundColor={button.backgroundColor}
                  hoverColor={button.hoverColor}
                  marginTop={button.marginTop}
                  onClick={button.onClick}
                />
              )
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StoryPage;
