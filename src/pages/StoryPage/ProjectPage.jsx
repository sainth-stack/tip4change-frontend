import { Box, Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomTypography from '../../components/TypoGraphy/CustomTypography';
import { StoryPageButtonData, StoryPageUiFileds } from './data';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import DragAndDropFileInput from '../../components/DragAndDropFileInput/DragAndDropFileInput';
import { Grid } from '@mui/material';
import CustomButton from '../../components/Button/CustomButton';

const StoryPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);


  const [formData, setFormData] = useState({
    fileInput: null,
    title: "",
    projectGoal: "",
    paymentBudget: "",
    description: "",
  });


   const handleChange = (id, value) => {
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
      <Box sx={{ }}>
         <CustomTypography color="text.primary">Project Creation</CustomTypography>
      <Breadcrumbs separator="››" aria-label="breadcrumb">
        <CustomTypography color="text.primary">Home</CustomTypography>
        {pathnames.map((value, index) => (
          <CustomTypography key={index} color="text.primary">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </CustomTypography>
        ))}
      </Breadcrumbs>
    </Box>

      
  <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >

        <Grid maxWidth="800px" spacing={2} container>
          {StoryPageUiFileds.map((field, index) => (
            <Grid
              item
              xs={12}
              md={field?.id === "projectGoal" || field?.id === "paymentBudget" ? 6 : 12}
            key={field?.id}>
              {
                field?.type === "file"
              
              ? (
                   <DragAndDropFileInput onFileSelect={handleFileSelect} />
                  ) : (
                    <>
                     <CustomInput
                  id={field.id}
                  type={field.type}
                  label={field.label}
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={field.type === "textarea" ? 4 : undefined}
                     
                />
                </>)
              }
             

              
            </Grid>
          ))}
          
        </Grid>
        
        <Grid container justifyContent="flex-end" marginLeft={-30}
        padding={0}>
  <Grid item xs="auto" sx={{ display: "flex", gap: "1rem" }}>
    {StoryPageButtonData.filter((field) => field.type === "button").map((button) => (
      <CustomButton
        key={button.id}
        color={button.color}
        text={button.text}
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

export default StoryPage;
