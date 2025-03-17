import React from "react";
import { Card, CardContent, Box, Grid } from "@mui/material";

const PaymentCard = ({ imageSrc, extraImageSrc, label, selected, onClick, defaultWhite, imageSizes = {}, extraImageSizes = {} }) => {
  return (
    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center",maxWidth:'150px',width:'100%' }}>
      <Card
        onClick={onClick}
        sx={{
          maxWidth: "200px",
          // minWidth:'150px',
          width: "100%", 
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "top",
          borderRadius: "20px",
          border: selected ? "2px solid #847F3B" : "1px solid #ccc",
          backgroundColor: defaultWhite ? "white" : selected ? "#F7F5EE" : "white",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            borderColor: "#847F3B",
          },
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
          {imageSrc && (
            <Box 
              component="img" 
              src={imageSrc} 
              alt="icon" 
              sx={{
                width: imageSizes.width || 20, 
                height: imageSizes.height || 16, 
                marginBottom: 0.5, 
                marginTop: 1
              }} 
            />
          )}
          {extraImageSrc && (
            <Box 
              component="img" 
              src={extraImageSrc} 
              alt="extra icon" 
              sx={{
                width: extraImageSizes.width || 40, 
                height: extraImageSizes.height || 10.66, 
                marginTop: 1
              }} 
            />
          )}
          {label && !extraImageSrc && (
            <Box component="p" sx={{ color: "#666", fontWeight: 500, marginTop: 1 }}>
              {label}
            </Box>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PaymentCard;
