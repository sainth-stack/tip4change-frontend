import React from 'react'
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Grid } from '@mui/material';
import CustomTypography from '../../components/TypoGraphy/CustomTypography';
import { StoryPageButtonData, StoryPageUiFileds } from './data';
import DragAndDropFileInput from '../../components/DragAndDropFileInput/DragAndDropFileInput';
import CustomInput from '../../components/CustomInput/CustomInput';
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
  
  
    
  return (
      <>
           <Box sx={{ }}>
         <CustomTypography color="text.primary">Story Upload</CustomTypography>
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
              md={field?.id === "ProductTitle" || field?.id === "productCode" ? 6 : 12}
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
  <Grid item xs="auto" sx={{ display: "flex", gap: "1rem" }} mt={4}>
    {StoryPageButtonData.filter((field) => field.type === "button").map((button) => (
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
          
    </>
  )
}

export default StoryPage