import React from "react";
import CardWidget from "../../../../components/Card/CardWidget";

import BarChart from "../../../../components/AllGraphs/BarGraph";
import MultiLineChart from "../../../../components/AllGraphs/MultiLineGraph";
import { Box } from "@mui/material";
import {
  LineChartDataSets,
  LineChartLabels,
  sampleBarData,
  sampleBarLabels,
} from "./data";

const Section1 = () => {
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
          <MultiLineChart
            dataSets={LineChartDataSets}
            labels={LineChartLabels}
            title="CO₂ Emission Trends "
          />
        </CardWidget>
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: "25rem",
        }}
      >
        <CardWidget>
          <BarChart
            data={sampleBarData}
            labels={sampleBarLabels}
            title="Water Usage saved"
          />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section1;
