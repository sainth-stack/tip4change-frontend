import React from "react";
import { Grid2, Typography, Box } from "@mui/material";
import heroimg from "../../../../assets/images/section2img.png";
import './index.css'

const Section2 = () => {
  return (
    <Box className="section2-container">
      <div className="bg-img"></div>

      {/* Section Heading */}
      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        <Typography
          className="section2-title"
          variant="h4"
          fontWeight="600"
          sx={{ marginTop: "20px" ,
                 fontFamily: 'Montserrat',
            // fontWeight: 600,
            fontSize: {xs:"25px",md:"40px"},
            textTransform:" uppercase",
            // padding: "10px",
            margin: "20px",
            color: "#0E0E0E" }}
        >
          Comparison with Conventional T-Shirt
        </Typography>
        <p
          className="section2-text"
          style={{
            fontWeight: "400",
            maxWidth: "800px",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          By choosing our sustainable cotton T-shirt, you're not only getting a
          high-quality product, but you're also contributing to a more
          sustainable fashion industry.
        </p>
      </Box>

      {/* Section Subheading */}
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h6" className="section-title" fontWeight="600" sx={{fontSize:"25px"}}>
          CHEMICALS USED
        </Typography>
        <p
          className="section-text"
          style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}
        >
          "Our sustainable cotton T-shirt uses 0% synthetic pesticides and
          fertilizers, compared to conventional cotton which uses an average of
          20%."
        </p>
      </Box>

      {/* Responsive Grid */}
      <Grid2
  container
  spacing={3}
  sx={{
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: { xs: "column", lg: "row" }, // Row only for large screens
    alignItems: "center",
  }}
>
  {/* Left Text Section */}
  <Grid2
    item
    xs={12}
    lg={4} // Only column-wise when above 1200px
    sx={{
      textAlign: { xs: "center", lg: "right" },
      display: "flex",
      justifyContent: { xs: "center", lg: "flex-end" },
    }}
  >
    <Box sx={{ maxWidth: "400px" }}>
      <Typography variant="h6" className="section-title" fontWeight="600">
        GMOs
      </Typography>
      <p className="section-text">
        "Our sustainable cotton is 100% non-GMO, ensuring a healthier
        environment and safer working conditions for farmers."
      </p>
      <Box height={10} />
      <Typography variant="h6" className="section-title" fontWeight="600">
        WATER CONSUMED
      </Typography>
      <p className="section-text">
        "Our sustainable cotton T-shirt uses 30% less water than conventional
        cotton, conserving this precious resource for future generations."
      </p>
    </Box>
  </Grid2>

  {/* Center Image */}
  <Grid2
    item
    xs={12}
    lg={4} // Center image only in row mode (1200px+)
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src={heroimg}
      alt="Sustainable Cotton"
      sx={{
        width: { xs: "80%", lg: "100%" },
        maxWidth: "300px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  </Grid2>

  {/* Right Text Section */}
  <Grid2
    item
    xs={12}
    lg={4} // Only column-wise on large screens
    sx={{
      textAlign: { xs: "center", lg: "left" },
      display: "flex",
      justifyContent: { xs: "center", lg: "flex-start" },
    }}
  >
    <Box sx={{ maxWidth: "400px" }}>
      <Typography variant="h6" className="section-title" fontWeight="600">
        CO2 EMISSIONS
      </Typography>
      <p className="section-text">
        "Our sustainable cotton T-shirt produces 50% fewer CO2 emissions than
        conventional cotton, reducing the carbon footprint of our supply chain."
      </p>
      <Box height={10} />
      <Typography variant="h6" className="section-title" fontWeight="600">
        BIODIVERSITY
      </Typography>
      <p className="section-text">
        "Our sustainable cotton farming practices promote biodiversity,
        preserving the natural ecosystem and supporting local wildlife."
      </p>
    </Box>
  </Grid2>
</Grid2>

    </Box>
  );
};

export default Section2;
