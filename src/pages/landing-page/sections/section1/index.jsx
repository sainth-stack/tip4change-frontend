// src/pages/Section1.jsx
import React from "react";
import { Box, Grid, Button, Container, useMediaQuery } from "@mui/material";
import Layout from "../../../../layout";
import CustomTypography from "../../../../components/TypoGraphy/CustomTypography";
import CustomIconCard from "./../../../../components/Card/CustomIconCard";
import pathImage from "../../../../assets/images/pathImage.png";
import LadyImageRight from "../../../../assets/images/LadyImageRight.png";
import CustomButton from "../../../../components/Button/CustomButton";
import CustomImage from "../../../../components/CustomImage/CustomImage";
import { section1StaticData } from "./data/Section1Data";
// Icons (replace these paths with your icons)

const Section1 = () => {
  //media queries----------------------------------------------------------------
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:960px)");
  //media queries----------------------------------------------------------------

  return (
    <>
      <Layout />
      <Box
        sx={{
          padding: { xs: "16px 0", md: "32px 0" },
          background: "#dbd9c5",
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            justifyContent="space-around"
            alignItems="center"
          >
            {/* Left Side */}
            <Grid item xs={12} md={6} marginTop={{ xs: 3, md: 4 }}>
              <CustomTypography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  margin: { xs: 2, md: 4 },
                  marginTop: { xs: 6, md: 8 },
                  maxWidth: { xs: "100%", md: "20rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {section1StaticData.leftSideText}
              </CustomTypography>
              <CustomTypography
                variant={isMobile ? "body2" : isTablet ? "h6" : "body1"}
                sx={{
                  marginBottom: { xs: 2, md: 3 },

                  marginLeft: { xs: 0, md: "2rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {section1StaticData.leftSideText2}
              </CustomTypography>
            </Grid>

            {/* Right Side (Image and Button) */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",

                marginTop: { xs: "0rem", md: "2rem" },
              }}
            >
              <CustomImage
                src={LadyImageRight}
                alt="Farmer"
                styles={{
                  width: "100%",
                  maxWidth: "20rem",
                  borderRadius: "50%",
                }}
              />

              <CustomButton
                {...{
                  text: section1StaticData.rightSideButtonText,
                  marginTop: { xs: -3, md: -3 },
                }}
              />
            </Grid>
          </Grid>

          {/* Icons Section */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: 4 }}
          >
            <CustomImage
              alt="Bottom Work Flow "
              src={pathImage} // Replace with your image path
              styles={{
                maxWidth: "90%",
              }}
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Section1;
