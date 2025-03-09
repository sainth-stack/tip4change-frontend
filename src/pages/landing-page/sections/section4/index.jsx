import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { cards, StyledCard, GoalRiseContainer } from '../section4/data.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section4 = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", padding: "20px" }}>
      {/* Top Section with Title and Description */}
      <Box sx={{ marginLeft: "20px" }}> 
        <Typography 
          variant="h4" 
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "32px" }, 
            marginBottom: "10px",
            color: "black",
            font:"montserrat"
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
            paddingLeft:"10px",
            paddingRight:"10px",
            alignText:'start',
            font:"montserrat"
          }}
        >
          We've partnered with local organizations to support projects that align 
          with our values. Choose a project that resonates with you and add $X to 
          your bill to make a difference.
        </Typography>
      </Box>

      {/* Donation Cards */}
      <Grid container spacing={3} sx={{ padding: 3, justifyContent: "center" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={12} md={3} key={index}>
            <StyledCard>
              <CardMedia 
                component="img" 
                height="140" 
                image={card.image} 
                alt={card.title} 
                sx={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10.01px",
                  borderTopRightRadius: "10.01px",
                }} 
              />
              <CardContent sx={{ marginTop: "30px" }}>
                <GoalRiseContainer style={{ marginBottom: "30px" }}>
                  <div><strong>Goal</strong><p>₹ 40Cr</p></div>
                  <div><strong>Rise</strong><p>₹ 30Cr</p></div>
                </GoalRiseContainer>

               <Box sx={{textAlign:"start" }}>
               <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ fontWeight: 600, fontSize: "20px", textAlign:"start" }}
                >
                  {card.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" >
                  {card.description}
                </Typography>
               </Box>

                {/* Progress-like underline */}
                  <div 
                  style={{
                    width: "251px",
                    height: "5px",
                    backgroundColor: "#E0E0E0", 
                    borderRadius: "5px",
                    marginTop: "20px",
                    // position: "relative",
                    // overflow: "hidden",
                    // marginTop:'20px'
                  }}
                >
                  <div 
                    style={{
                      width: "65%", 
                      height: "100%",
                      backgroundColor: "#8b7e3f", 
                      borderRadius: "5px"
                    }}
                  ></div>
                </div>

                {/* To Go Section */}
                <Typography 
                  variant="body2"
                  sx={{ display: "flex", justifyContent: "space-between", width: "251px", color: "#9E9E9E" }}
                >
                  <span>To Go</span>
                  <span style={{ fontWeight: "bold", color: "black" }}>10cr</span>
                </Typography>



                {/* Donate Button */}
                <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon sx={{ width: "12.36px", height: "12.36px" }} />}
                    sx={{
                      backgroundColor: "#8b7e3f",
                      color: "white",
                      width: "159.25px",
                      height: "38.62px",
                      borderRadius: "15.45px",
                      padding: "6.18px 12.36px",
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
