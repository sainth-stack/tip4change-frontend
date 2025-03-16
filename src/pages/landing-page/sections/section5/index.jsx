import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import image from "/src/assets/images/image5.png";

const SocialImpactCard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          alignItems: "center",
          justifyContent: "space-evenly",
          fontStyle: "Montserrat",
          backgroundColor: "#F8F6F2",
          position: "relative",
          textAlign: "center",
          width: "100%",
          margin: "auto",
          mt: "40px",
          mb: "50px",
          "@media (min-width: 1024px) and (max-width: 1366px)": {
            flexDirection: "column",
            padding: "0px",
            mb: "20px",
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "-40px",
            backgroundColor: "white",
            px: { xs: 2, md: 4 },
            py: 1.2,
            borderRadius: "12px",
            fontWeight: "bold",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            textAlign: "center",
            "@media (min-width: 1024px) and (max-width: 1366px)": {
              fontSize: "22px",
              px: 3,
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            fontStyle="Montserrat"
            sx={{
              fontSize: { xs: "17px", md: "30px" },
              width: { xs: "90%", md: "1100px" },
              "@media (min-width: 1024px) and (max-width: 1366px)": {
                fontSize: "34px",
              },
            }}
          >
            Share Your Impact On Social Media
          </Typography>
        </Paper>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-evenly" },
            marginTop: { md: "60px" },
            alignItems: { xs: "center", md: "center" },
            width: "100%",
            "@media (min-width: 1024px) and (max-width: 1366px)": {
              flexDirection: "column",
              mt: "40px",
            },
          }}
        >
          <Box>
            <img
              src={""}
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

          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              fontWeight="400"
              fontStyle={"Montserrat"}
              sx={{
                mt: 2,
                px: { xs: 2, md: 4 },
                fontSize: { xs: "15px", md: "16px" },
                textAlign: { xs: "center", md: "center" },
                fontFamily: "Montserrat",
                fontWeight: 400,
                lineHeight: "28px",
                "@media (min-width: 1024px) and (max-width: 1366px)": {
                  fontSize: "18px",
                  px: 3,
                },
              }}
            >
              Inspire others to join the movement and make a difference in their
              <br />
              communities. Share your impact on Facebook, Instagram, Twitter,
              <br /> and other social media platforms.
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
                mb: "15px",
              }}
            >
              <img
                src={image}
                alt="Main Image"
                style={{
                  maxWidth: "290px",
                  height: "50px",
                  "@media (min-width: 1024px) and (max-width: 1366px)": {
                    maxWidth: "250px",
                    height: "45px",
                  },
                }}
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
          width: { xs: "80%", md: "480px" },
          borderRadius: "30px",
          mb: { xs: 2, md: 2.5 },
          mt: 2,
          px: { xs: 3, md: 5 },
          py: { xs: 1, md: 1.2 },
          fontSize: { xs: "14px", md: "16px" },
          "&:hover": { backgroundColor: "#5D5A2F" },
          display: "block",
          mx: "auto",
          "@media (min-width: 1024px) and (max-width: 1366px)": {
            width: "400px",
            fontSize: "15px",
          },
        }}
      >
        Join Community
      </Button>
    </div>
  );
};

export default SocialImpactCard;
