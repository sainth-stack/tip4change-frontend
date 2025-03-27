import React from "react";
import * as d3 from "d3";

import { Box, Stack } from "@mui/material";
import WorldMapChart from './../../../../components/AllGraphs/WorldMapChart/WorldMapChart';
import { MapsampleData } from "./data";
import CardWidget from "../../../../components/Card/CardWidget";
import CustomImage from "../../../../components/CustomImage/CustomImage";

import mapImage from "/src/assets/images/big_map.png"
import CustomTypography from "../../../../components/TypoGraphy/CustomTypography";
import { color } from "chart.js/helpers";
import { transform } from "framer-motion";

const legendItems = [
  { label: "Sustainable & Efficient Suppliers", color: "#6D743F" },
  { label: "Pending Certification/Compliance Issues", color: "#E1AD01" },
  { label: "Risky or Underperforming Suppliers", color: "#E35D4F" },
];

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
          {/* <WorldMapChart
            width={800}
            height={450}
            title="Supply Chain"
            data={MapsampleData}
            colorScale={d3.scaleSequential(d3.interpolateOrRd)}
            tooltipFormatter={(d) => `<b>${d.country}</b>: ${d.value}`}
            onCountryClick={(d) => alert(`Clicked on ${d.country}: ${d.value}`)}
          /> */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CustomTypography
              sx={{
                fontWeight: "600",
                fontSize: "1.5rem",
                textAlign: "left",
                marginRight: "2rem",
              }}
            >
              {"Supply Chain"}
            </CustomTypography>

            <Stack direction="row" spacing={2} alignItems="center">
              {legendItems.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: item.color,
                      borderRadius: "50%",
                    }}
                  />
                  <CustomTypography
                    sx={{
                      color: "#0E0E0E4D",
                      fontSize: "11px",
                    }}
                  >
                    {item.label}
                  </CustomTypography>
                </Stack>
              ))}
            </Stack>
          </Box>
          <CustomImage
            src={mapImage}
            alt="Farmer"
            styles={{
              width: "100%",
              maxHeight: "60vh",
              marginTop: "2rem",
              objectFit: "contain",

              borderRadius: "50%",
            }}
          />

          {/* <WorldMapChart
            width={800}
            height={450}
            title="Supply Chain"
            data={MapsampleData}
            colorScale={d3.scaleSequential(d3.interpolateOrRd)}
            tooltipFormatter={(d) => `<b>${d.country}</b>: ${d.value}`}
            onCountryClick={(d) => alert(`Clicked on ${d.country}: ${d.value}`)}
          /> */}
        </Box>
      </CardWidget>
    </Box>
  );
};

export default Section2;
