import React from "react";
import { Box } from '@mui/material';
import CardWidget from "../../../../components/Card/CardWidget";
import MultiLineChart from "../../../../components/AllGraphs/MultiLineGraph";
import { LineChartDataSets, LineChartLabels } from "./data";
import WorldMapChart from "../../../../components/AllGraphs/WorldMapChart/WorldMapChart";
import { MapsampleData } from "../../SupplyChainSection/Section2/data";

import * as d3 from "d3";


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
          <MultiLineChart
            dataSets={LineChartDataSets}
            labels={LineChartLabels}
            title="Cotton Sourcing Trends Over Time "
            usePointStyle={true}
            tension={0.5}
            xGridShow={true}
            yGridShow={false}
          />
        </CardWidget>
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: "25rem",
        }}
      >
        <CardWidget sx={{ overflow: "scroll" }}>
          <WorldMapChart
            width={900}
            height={550}
            title={"Supplier Distribution & Risk Zones"}
            data={MapsampleData}
            colorScale={d3.scaleSequential(d3.interpolateOrRd)}
            tooltipFormatter={(d) => `<b>${d.country}</b>: ${d.value}`}
            onCountryClick={(d) => alert(`Clicked on ${d.country}: ${d.value}`)}
          />
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
