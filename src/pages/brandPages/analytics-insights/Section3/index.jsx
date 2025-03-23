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
          width: "100%",
          minWidth: "20rem",
          maxWidth: {
            xs: "100vw",
            sm: "80vw",
            md: "70vw",
            lg: "50vw",
            xl: "50vw",
            "2xl": "40vw",
          },
        }}
      >
        <CardWidget>
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

      <Box
        sx={{
          flex: 1,
          width: "100%",
          minWidth: "20rem",
          maxWidth: {
            xs: "100vw",
            sm: "80vw",
            md: "70vw",
            lg: "50vw",
            xl: "50vw",
            "2xl": "40vw",
          },
        }}
      >
        <CardWidget>righcst table</CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
