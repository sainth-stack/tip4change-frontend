import React from "react";
import * as d3 from "d3";

import { Box } from "@mui/material";
import WorldMapChart from "./../../../../components/AllGraphs/WorldMapChart/WorldMapChart";
import { MapsampleData } from "./data";
import CardWidget from "../../../../components/Card/CardWidget";

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
      <CardWidget
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          <WorldMapChart
            width={800}
            height={450}
            title="Supply Chain"
            data={MapsampleData}
            colorScale={d3.scaleSequential(d3.interpolateOrRd)}
            tooltipFormatter={(d) => `<b>${d.country}</b>: ${d.value}`}
            onCountryClick={(d) => alert(`Clicked on ${d.country}: ${d.value}`)}
          />
        </Box>
      </CardWidget>
    </Box>
  );
};

export default Section2;
