import React from "react";
import { Grid,Box } from "@mui/material";
import CardWidget from "../../../../components/Card/CardWidget";
import PieChart from "../../../../components/AllGraphs/PieGraph";
import { pieChartData, labels } from "./data";
import Table from "./table";

const Section2 = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      spacing={6} // ✅ Ensures space between grid items
      sx={{
        maxWidth: "1107px",
        width: "100%",
        height: "327px",
        flexWrap: "nowrap",
        margin:"0 auto",
        gap:"50px"

        
        
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: {
            xs: "100vw",
            sm: "80vw",
            md: "70vw",
            lg: "80vw",
            xl: "50vw",
            "2xl": "40vw",
          },
        }}
      >
<CardWidget
  sx={{
    width: "100%",
    height: "100%",
    overflow: "auto", // ✅ Allows scrolling if content overflows
    display: "flex",
    flexDirection: "column",
    
  }}
>
  <Table />
</CardWidget>

      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: {
            xs: "100vw",
            sm: "80vw",
            md: "70vw",
            lg: "30vw",
            xl: "50vw",
            "2xl": "40vw",
          },
        }}
      >
        <CardWidget>
          <PieChart
            dataSets={pieChartData}
            labels={labels}
            title="Organic vs. Conventional Cotton Sourcing"
            usePointStyle={false}
            labelColor="#fff"
            LegendBoxWidth={20}
            LegendBoxHeight={20}
          />
        </CardWidget>
        </Box>
      </Grid>
  
  );
};

export default Section2;
