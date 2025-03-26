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


const Section2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap:'24px'
      }}
    >
      <Box
        sx={{
          flex: 1,
          margin:0,
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
          <MultiLineChart
            dataSets={LineChartDataSets}
            usePointStyle={false}
            labels={LineChartLabels}
            title="CO₂ Emission Trends "
            UnitType={"Kg"}
          />
        </CardWidget>
      </Box>

      <Box
        sx={{
          flex: 1,
          margin:0,
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
          <BarChart
            data={sampleBarData}
            labels={sampleBarLabels}
            title="Water Usage saved"
            legendDisplayed={false}
          />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section2;
