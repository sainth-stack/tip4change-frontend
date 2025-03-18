import { Box, Breadcrumbs, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Grid } from '@mui/material';
import React from 'react';
import CustomTypography from '../../components/TypoGraphy/CustomTypography';
import CustomInput from '../../components/CustomInput/CustomInput';
import DragAndDropFileInput from '../../components/DragAndDropFileInput/DragAndDropFileInput';
import CustomButton from '../../components/Button/CustomButton';
import { ProjectPageUiFileds, ProjectPageButtonData } from './data';
import NavigationHeader from '../../layout/NavigationHeader';
import { TextareaComponent } from '../../components/inputComponents/textarea';
import { InputTextComponent } from '../../components/inputComponents/text';
import { StoryPageButtonData } from '../StoryPage/data';



const ProjectPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [formData, setFormData] = useState({
    fileInput: null,
    title: "",
    projectGoal: "",
    paymentBudget: "",
    description: "",
  });

  const handleChange = (id, value) => {
    //  console.log("on chane", id, value);
    // on change wokeing
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileSelect = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      fileInput: files[0], // Store the first file
    }));
  };

 
  // console.log("pathnames: " + pathnames)
  return (
    <>
      <Box>
        <NavigationHeader path={pathnames} PageText="Project Creation" />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          //  minHeight: "calc(100vh - 100px)",
          minWidth: "100%",
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
            justifyContent: "center",
          }}
        >
          {ProjectPageUiFileds.map((field, index) => (
            <Grid
              item
              xs={12}
              md={["projectGoal", "paymentBudget"].includes(field.id) ? 6 : 12}
              key={field?.id}
            >
              {field?.type === "file" ? (
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
                  rows={field.rows || 1}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  sx={{ width: "100%" }}
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
            }, marginTop: 4, justifyContent: "flex-end" }}
        >
          <Grid item sx={{ display: "flex", gap: "1rem" }}>
            {ProjectPageButtonData.filter(
              (field) => field.type === "button"
            ).map((button) => (
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
            ))}
          </Grid>
        </Grid>
      </Box>
      {/* <DragAndDropFileInput /> */}
    </>
  );
};

export default ProjectPage;
