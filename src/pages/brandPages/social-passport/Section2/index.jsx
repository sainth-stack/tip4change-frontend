import React from "react";
import CardWidget from "./../../../../components/Card/CardWidget";
import { Box } from "@mui/material";
import PieChart from "../../../../components/AllGraphs/PieGraph";
import { pieChartData, labels } from "./data";
import { Table33 } from "./table/Table";
const Section2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap:'24px'
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth:"60%",
          background:'white'
        }}
      >
          <Table33 />
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth:"40%"
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
    </Box>
  );
};

export default Section2;
