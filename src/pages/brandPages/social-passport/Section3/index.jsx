import React from "react";
import { Box, Stack } from '@mui/material';
import CardWidget from "../../../../components/Card/CardWidget";
import MultiLineChart from "../../../../components/AllGraphs/MultiLineGraph";
import { LineChartDataSets, LineChartLabels } from "./data";
import WorldMapChart from "../../../../components/AllGraphs/WorldMapChart/WorldMapChart";
import { MapsampleData } from "../../SupplyChainSection/Section2/data";

import * as d3 from "d3";
import CustomTypography from "../../../../components/TypoGraphy/CustomTypography";
import mapImage from "/src/assets/images/small_map.png";
import CustomImage from "../../../../components/CustomImage/CustomImage";


const legendItems = [
  { label: "Certified", color: "#6D743F" },
  { label: "Moderate", color: "#E1AD01" },
  { label: "High-Risk", color: "#E35D4F" },
];

const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: "60%",
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
          width: "40%",
        }}
      >
        <CardWidget>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CustomTypography
              sx={{
                fontWeight: "600",
                fontSize: "1.5rem",
                textAlign: "left",
                marginRight: "2rem",
              }}
            >
              {"Supplier Distribution & Risk Zones"}
            </CustomTypography>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={"space-around"}
              mt={2}
            >
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
            alt="map image"
            styles={{
              width: "100%",
              maxHeight: "30vh",

              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
          {/* <WorldMapChart
            width={200}
            height={230}
            title={"Supplier Distribution & Risk Zones"}
            data={MapsampleData}
            colorScale={d3.scaleSequential(d3.interpolateOrRd)}
            tooltipFormatter={(d) => `<b>${d.country}</b>: ${d.value}`}
            onCountryClick={(d) => alert(`Clicked on ${d.country}: ${d.value}`)}
          /> */}
        </CardWidget>
      </Box>
    </Box>
  );
};

export default Section3;
