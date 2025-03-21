import React from "react";
import { Box } from '@mui/material';
import CardWidget from "../../../../components/Card/CardWidget";
import MultiBarChart from "../../../../components/AllGraphs/MultiBarGraph";
import { barChartLabels, barChartDatasets } from "./data";



const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "25rem",
        }}
      >
        <CardWidget>
          <MultiBarChart
            labels={barChartLabels}
            datasets={barChartDatasets}
            title="Consumer Preference for Organic vs. Regular Cotton"
            xGridDisplay={false}
            YGridDisplay={true}
            yAxisTitle={"Consumer Preference (%)"}
          />
        </CardWidget>
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: "25rem",
        }}
      >
        <CardWidget>righcst table</CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
