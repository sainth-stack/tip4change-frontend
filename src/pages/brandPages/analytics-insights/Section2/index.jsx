import React from "react";

import { Box } from "@mui/material";
import PieChart from "../../../../components/AllGraphs/PieGraph";
import CardWidget from './../../../../components/Card/CardWidget';
import { pieChartData, labels, AreaChartdataSets, AreaChartlabels } from "./data";
import AreaChart from "../../../../components/AllGraphs/AreaGraph";


const Section2 = () => {
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
          <PieChart
            dataSets={pieChartData}
            labels={labels}
            title="Top Selling Cotton Products"
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
        <CardWidget>
          <AreaChart
            labels={AreaChartlabels}
            dataSets={AreaChartdataSets}
            title="Consumer Behavior Trends"
            subHeading="Organic cotton sales increased by 40% from 2022 to 2025, while non-organic cotton demand declined by 15%."
          />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section2;
