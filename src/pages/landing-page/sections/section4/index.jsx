import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { cards, StyledCard, GoalRiseContainer } from '../section4/data.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section4 = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", }} mt={3}>
      {/* Top Section with Title and Description */}
      <Box sx={{ marginLeft: "20px" }}>
        <Typography 
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "32px" },
            marginBottom: "10px",
            color: "black",
            fontFamily: "Montserrat"
          }}
        >
          Make a Difference in Your Community
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            maxWidth: "520px",
            margin: "0 auto",
            fontSize: { xs: "14px", sm: "16px" },
            paddingLeft: "10px",
            paddingRight: "10px",
            textAlign: "start",
            fontFamily: "Montserrat"
          }}
        >
          We've partnered with local organizations to support projects that align 
          with our values. Choose a project that resonates with you and add ₹X to 
          your bill to make a difference.
        </Typography>
      </Box>

      {/* Donation Cards */}
      <Grid container spacing={3} sx={{ padding: 3,justifyContent: "center" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={12} md={3} key={index}  sx={{ marginBottom: "30px" }}> 
            <StyledCard sx={{ height: "100%", display: "flex", flexDirection: "column", }}>
              <CardMedia 
                component="img"
                image={card.image}
                alt={card.title}
                sx={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />

              {/* Ensure Card Content Stretches */}
              <CardContent sx={{ 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: "20px"
              }}>
                
                <Box sx={{ flexGrow: 1 }}>
                  {/* Goal & Rise Section */}
                  <GoalRiseContainer sx={{ marginBottom: "20px" }}>
                    <div><strong>Goal</strong><p>₹ 40Cr</p></div>
                    <div><strong>Rise</strong><p>₹ 30Cr</p></div>
                  </GoalRiseContainer>

                  {/* Title & Description */}
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", textAlign: "start", marginBottom:"20px" }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>

                  {/* Progress Bar */}
                  <Box sx={{ marginTop: "20px" }}>
                    <Box sx={{
                      width: "100%",
                      height: "5px",
                      backgroundColor: "#E0E0E0",
                      borderRadius: "5px",
                    }}>
                      <Box sx={{
                        width: "69%",
                        height: "100%",
                        backgroundColor: "#8b7e3f",
                        borderRadius: "5px"
                      }} />
                    </Box>

                    {/* To Go Section */}
                    <Typography 
                      variant="body2"
                      sx={{ display: "flex", justifyContent: "space-between", width: "100%", color: "#9E9E9E", marginTop: "5px" }}
                    >
                      <span>To Go</span>
                      <span style={{ fontWeight: "bold", color: "black" }}>10Cr</span>
                    </Typography>
                  </Box>
               

                {/* Donate Button (Always at the Bottom) */}
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon sx={{ width: "12px", height: "12px" }} />}
                    sx={{
                      backgroundColor: "#8b7e3f",
                      color: "white",
                      width: "160px",
                      height: "40px",
                      borderRadius: "15px",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "12px",
                      "&:hover": { backgroundColor: "#7a6e38" },
                    }}
                  >
                    Donate Now
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section4;
