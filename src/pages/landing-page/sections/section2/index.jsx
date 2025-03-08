import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import heroimg from '../../../../assets/images/section2img.png';
import './index.css';

const Section2 = () => {
  return (
    <Box className="section2-container">
        <div className="bg-img"></div>
      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        <Typography className="section2-title"variant="h4" fontWeight="bold">
          Comparison with Conventional T-Shirt
        </Typography>
        <p className="section-text" style={{fontWeight:400, maxWidth:"800px", textAlign:"center" , margin:"0 auto", justifyContent:"center", alignItems:"center"}}>
          By choosing our sustainable cotton T-shirt, you're not only getting a high-quality product,
          but you're also contributing to a more sustainable fashion industry.
        </p>
      </Box>

      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h6" className="section-title"  fontWeight="bold">CHEMICALS USED</Typography>
        <p className="section-text" style={{maxWidth:'500px', textAlign:'center', margin:"0 auto"}} >
          "Our sustainable cotton T-shirt uses 0% synthetic pesticides and fertilizers, compared to conventional 
          cotton which uses an average of 20%."
        </p>
      </Box>

      <Grid 
        sx={{ textAlign: "center",display:"flex", gap:'0px'}}
      >
        {/* Left Text Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "right", display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Box sx={{ maxWidth: "400px" }}>
            <Typography  variant="h6" className="section-title"  fontWeight="bold">GMOs</Typography>
            <p className="section-text" >
              "Our sustainable cotton is 100% non-GMO, ensuring a healthier environment and safer working conditions for farmers."
            </p>
            <Box height={10} />
            <Typography variant="h6"   className="section-title"  fontWeight="bold">WATER CONSUMED</Typography>
            <p className="section-text">
              "Our sustainable cotton T-shirt uses 30% less water than conventional cotton, conserving this precious 
              resource for future generations."
            </p>
          </Box>
        </Grid>

        {/* Center Image */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
          <Box
            component="img"
            src={heroimg}
            alt="Sustainable Cotton"
            sx={{ width: "100%", maxWidth: "250px", height: "auto", objectFit: "cover", borderRadius: "50%" }}
          />
        </Grid>

        {/* Right Text Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "left", display: "flex", justifyContent: "flex-start", flexGrow: 1 }}>
          <Box sx={{ maxWidth: "400px" }}>
            <Typography variant="h6" className="section-title"  fontWeight="bold">CO2 EMISSIONS</Typography>
            <p className="section-text">
              "Our sustainable cotton T-shirt produces 50% fewer CO2 emissions than conventional cotton, reducing the carbon footprint of our supply chain."
            </p>
            <Box height={10} />
            <Typography variant="h6" className="section-title"  fontWeight="bold">BIODIVERSITY</Typography>
            <p className="section-text">
              "Our sustainable cotton farming practices promote biodiversity, preserving the natural ecosystem and 
              supporting local wildlife."
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
