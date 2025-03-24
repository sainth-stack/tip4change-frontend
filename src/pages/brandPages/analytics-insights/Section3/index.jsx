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
        flexWrap: "nowrap", // ✅ Prevents unwanted wrapping
        width: "100%",
        gap: "50px", // ✅ Space between cards
        maxWidth: "1108px", // ✅ Total width of both cards combined
        height: "490px", // ✅ Set height constraint
        margin:"0 auto"
      }}
    >
      {/* Bar Chart Card (Half Width) */}
      <Box sx={{ width: "551px", height: "490px" }}>
        <CardWidget
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
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
      <Box sx={{ width: "551px", height: "490px" }}>
        <CardWidget
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // ✅ Ensures the table does not overflow
          }}
        >
          <Table1 />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
