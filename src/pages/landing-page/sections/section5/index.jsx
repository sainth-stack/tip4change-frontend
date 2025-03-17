import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import mailImage from "../../../../assets/svg/MailIcon.svg";
import section5 from "/src/assets/images/image5.png";
const SocialImpactCard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" }, // Column for mobile, row for larger screens
          alignItems: "center",
          justifyContent: "space-evenly",
          fontStyle: "Montserrat",
          // p: { xs: 2, md: 4 },
          backgroundColor: "#F8F6F2",
          position: "relative",
          textAlign: "center",
          width: "100%",
          margin: "auto",
          // height: { xs: "180px", md: "350px" }, // Adjust height for mobile
          mt: "40px",
          mb: "50px",
        }}
      >
        {/* Header Banner */}
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "-30px",
            backgroundColor: "white",
            px: { xs: 2, md: 4 },
            py: 1.2,
            borderRadius: "12px",
            fontWeight: "bold",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            fontFamily="Montserrat"
            fontStyle="Montserrat"
            // mt={"10px"}
            sx={{
              fontSize: { xs: "17px", md: "34px" },
              width: { xs: "90%", sm: "600px", md: "900px" }, // Full width on small screens
            }}
          >
            Share Your Impact On Social Media
          </Typography>
        </Paper>

        {/* Envelope Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-evenly" },
            marginTop: { md: "60px" },
            alignItems: { xs: "center", md: "center" },
            width: "100%",
          }}
        >
          <Box>
            <img
              src={mailImage} // Replace with actual image path
              alt="Envelope"
              style={{
                width: "170px",
                height: "200px",
                marginTop: "70px",
                marginBottom: "20px",
                backgroundColor: "#F8F6F2",
              }}
            />
          </Box>

          {/* Description */}
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              fontWeight="400"
              fontStyle={"Montserrat"}
              sx={{
                mt: 2,
                px: { xs: 2, md: 4 },
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "center", md: "center" },
                fontFamily: "Montserrat",
                // backgroundColor: "white",
              }}
            >
              Inspire others to join the movement and make a difference in their
              <br />
              communities. Share your impact on Facebook, Instagram, Twitter,
              <br /> and other social media platforms.
            </Typography>
          </Box>
          {/* Social Media Icons */}
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                mt: 4,
                mb: "15px",
              }}
            >
              <img
                src={section5}
                alt="Section 5"
                style={{ width: "290px", height: "50px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#7B783E",
          color: "white",
          width: { xs: "80%", md: "450px" }, // Responsive width
          borderRadius: "30px",
          mb: { xs: 2, md: 2.5 }, // Keep consistent spacing
          mt: 2,
          px: { xs: 3, md: 5 },
          py: { xs: 1, md: 1.2 },
          fontSize: { xs: "14px", md: "16px" },
          "&:hover": { backgroundColor: "#5D5A2F" },

          // Centering Button Properly
          display: "block",
          mx: "auto", // Auto margin for centering
        }}
      >
        Join Community
      </Button>
    </div>
  );
};

export default SocialImpactCard;
