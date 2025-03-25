import React from "react";
import { Box } from "@mui/material";
import CardWidget from "../../../../components/Card/CardWidget";
import MultiBarChart from "../../../../components/AllGraphs/MultiBarGraph";
import { barChartLabels, barChartDatasets } from "./data";
import Table1 from "../table/table";

const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap", 
        gap: "24px",
      }}
    >
      {/* Bar Chart Card (Half Width) */}
      <Box sx={{ width: "100%", height: "440px" }}>
        <CardWidget
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
           
          }}
        >
          <MultiBarChart
            labels={barChartLabels}
            datasets={barChartDatasets}
            title="Consumer Preference for Organic vs. Regular Cotton"
            xGridDisplay={false}
            YGridDisplay={true}
            legendShow={false}
            yAxisTitle={"Consumer Preference (%)"}
            xAxisTitle={"Cotton Type"}
          />
        </CardWidget>
      </Box>

      {/* Table Card (Half Width) */}
      <Box sx={{ width: "100%", height: "440px" }}>
        <CardWidget
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Table1 />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
