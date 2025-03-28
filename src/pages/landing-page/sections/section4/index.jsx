import React,{useState} from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { cards, StyledCard, GoalRiseContainer } from '../section4/data.js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
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
            maxWidth: "580px",
            margin: "0 auto",
            fontSize: { xs: "14px", sm: "16px" },
            paddingLeft: "10px",
            paddingRight: "10px",
            textAlign: "center",
            fontFamily: "Montserrat"
          }}
        >
          <p> We've partnered with local organizations to support projects that align
          with our values. Choose a project that resonates with you and<br />
          add ₹X to your bill to make a difference.</p>
        </Typography>
      </Box>

      {/* Donation Cards */}
      <Grid container spacing={3} sx={{ padding: 3,justifyContent: "center", }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={12} md={4} lg={3}key={index}  sx={{ marginBottom: "30px" }}> 
            <StyledCard sx={{ height: "503px", maxWidth:"350px",display: "flex", flexDirection: "column",}}>
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
                  marginBottom:"0px"
                }}
              />

              {/* Ensure Card Content Stretches */}
              <CardContent sx={{ 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between",
                // paddingBottom: "20px"
              }}>
                
                <Box sx={{ flexGrow: 1 }}>
                  {/* Goal & Rise Section */}
                  <GoalRiseContainer sx={{ marginBottom: "10px",}}>
                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6.18px",fontFamily:"Montserrat", }}>
                       <strong style={{fontWeight:"700",fontSize:"14.62px",color:"#2A2A2A",width:"33px",height:'22px'}}>Goal</strong>
                       <p style={{ margin: 0, padding: 0,color:"#847F3B",fontWeight:"500" }}>₹ 40Cr</p>
                   </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",  gap: "6.18px", }}>
                       <strong style={{fontWeight:"700",fontSize:"14.62px",color:"#2A2A2A",width:"33px",height:'22px'}}>Rise</strong>
                       <p style={{ margin: 0, padding: 0,color:"#847F3B",fontWeight:"500" }}>₹ 30Cr</p>
                   </div>

                  </GoalRiseContainer>

                  {/* Title & Description */}
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", textAlign: "start", marginBottom:"20px",fontFamily:"Montserrat",lineHeight:"24.71px" }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{fontFamily:"Montserrat",textAlign:"start",margin:0,padding:0,fontWeight:"500",fontSize:"14px",lineHeight:"20.85px"}}>
                    {card.description}
                  </Typography>

                  {/* Progress Bar */}
                  <Box sx={{ marginTop: "20px" }}>
                    <Box sx={{
                      width: "100%",
                      height: "4.63px",
                      backgroundColor: "#E0E0E0",
                      borderRadius: "10.52px",
                      margin:"0 auto"
                    }}>
                      <Box sx={{
                        width: "67.70%",
                        height: "100%",
                        backgroundColor: "#8b7e3f",
                        borderRadius: "4.83px"
                      }} />
                    </Box>

                    {/* To Go Section */}
                    <Typography 
                      variant="body2"
                      sx={{ display: "flex", justifyContent: "space-between", width: "100%", color: "#9E9E9E", marginTop: "5px" }}
                    >
                      <span style={{fontFamily:"Montserrat",fontWeight:"600",fontSize:"12px",}}> To Go</span>
                      <span style={{ fontWeight: "bold", color: "black",fontFamily:"Montserrat" }}>10Cr</span>
                    </Typography>
                  </Box>
            </Box>
               

                {/* Donate Button (Always at the Bottom) */}
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Button
                    variant="contained"
                    onClick={()=>navigate("/payments")}
                    endIcon={<ArrowForwardIosIcon sx={{ width: "12px", height: "12px" }} />}
                    sx={{
                      backgroundColor: "#8b7e3f",
                      color: "white",
                      width: "159.25px",
                      height: "38.62px",
                      borderRadius: "15.45px",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily:"Montserrat",
                      lineHeight:"14",
                      letterSpacing:"0.12px",
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
