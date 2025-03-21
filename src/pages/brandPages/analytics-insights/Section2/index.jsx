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
          maxWidth: "25rem",
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
          maxWidth: "25rem",
        }}
      >
        <CardWidget>
          <AreaChart
            labels={AreaChartlabels}
            dataSets={AreaChartdataSets}
            title="Organic Cotton Trends"
          />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section2;
