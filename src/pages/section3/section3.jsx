import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { DoughnutChartComponent } from "./section3data";

const DoughnutChartsGrid = () => {
  const charts = [
    { year: "2022", percentage: 25 },
    { year: "2023", percentage: 39 },
    { year: "2024", percentage: 54 },
    { year: "2025", percentage: 77 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: "30px", sm: "40px", md: "50px" },
        boxShadow: "6px 6px 54px 0px #0000000D", // ✅ Added shadow
        borderRadius: "12px", // ✅ Slight rounding for smoothness
        backgroundColor: "#fff", // ✅ Ensures shadow visibility
        p: { xs: 2, md: 4 }, // ✅ Added padding for spacing
        maxWidth:"1109px",
        width:"100%",
        justifyContent:"center",
        margin :"0 auto",
        marginBottom:"40px"

      }}
    >
      {/* Title and Legend Section */}
      <Box
        sx={{
          maxWidth: "1108px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 3, // Space below the title
          px: 2, // Padding for responsiveness
        }}
      >
        {/* Title */}
        <Typography fontWeight="700" sx={{ fontFamily: "Montserrat", fontSize: "20px", lineHeight: "24px", color: "#1F1F25" }}>
          Fair Trade % Distribution – Year-wise
        </Typography>

        {/* Legend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 15, height: 15, backgroundColor: "#847F3B", borderRadius: "2px" }} />
          <Typography sx={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "12px", color: "#000000" }}>Certified</Typography>
          <Box sx={{ width: 15, height: 15, backgroundColor: "#F4F4F4", borderRadius: "2px" }} />
          <Typography sx={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "12px", color: "#000000" }}>Uncertified</Typography>
        </Box>
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1108px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="space-evenly" sx={{ width: "100%" }}>
          {charts.map((chart, index) => (
            <Grid
              item
              key={index}
              xs={12} // One per row on extra-small devices
              sm={6} // Two per row on small devices
              md={3} // Four per row on medium and larger screens
              display="flex"
              justifyContent="center"
              sx={{ mt: { xs: "10px" }, width: { xs: "100%", sm: "50%", md: "25%" },padding:"20px" }}
            >
              <Box textAlign="center" sx={{ width: "100%", maxWidth: "208px", height: "208px", padding: "20px", marginBottom: { md: "30px", lg: "40px" } }}>
                <Typography variant="subtitle1" fontWeight="400" sx={{ mb: { xs: "10px" } }}>
                  {chart.year}
                </Typography>
                <DoughnutChartComponent label="Certified" percentage={chart.percentage} width="100%" height="208px" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DoughnutChartsGrid;
