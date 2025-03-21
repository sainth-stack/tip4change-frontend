import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, CircularProgress } from "@mui/material"; // MUI Components
import CustomTypography from "../../TypoGraphy/CustomTypography";

const WorldMapChart = ({
  title,
  width = 800,
  height = 500,
  data = [],
  colorScale = d3.scaleSequential(d3.interpolateBlues),
  valueAccessor = (d) => d.value,
  countryAccessor = (d) => d.country,
  minValue = 0,
  maxValue = 100,
  tooltipFormatter = (d) => `${d.country}: ${d.value}`,
  onCountryClick = () => {},
}) => {
  const svgRef = useRef(null);
  const [geoData, setGeoData] = useState(null);

  // Load GeoJSON data
  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((data) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  useEffect(() => {
    if (!svgRef.current || !geoData) return;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove(); // Clear previous drawings

    const projection = d3
      .geoMercator()
      .scale(width / 2.5 / Math.PI)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    const dataMap = new Map(data.map((d) => [countryAccessor(d), valueAccessor(d)]));
    colorScale.domain([minValue, maxValue]);

    // Draw countries
    svg
      .selectAll(".country")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path)
      .attr("fill", (d) => {
        const value = dataMap.get(d.properties.name);
        return value !== undefined ? colorScale(value) : "#ddd";
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .on("click", (event, d) => {
        const value = dataMap.get(d.properties.name);
        onCountryClick({ country: d.properties.name, value });
      });

    // Add bubbles
    const bubbleSizeScale = d3.scaleSqrt().domain([minValue, maxValue]).range([5, 20]);

    svg
      .selectAll(".bubble")
      .data(geoData.features.filter((d) => dataMap.has(d.properties.name)))
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("cx", (d) => {
        const [x] = projection(d3.geoCentroid(d));
        return x;
      })
      .attr("cy", (d) => {
        const [, y] = projection(d3.geoCentroid(d));
        return y;
      })
      .attr("r", (d) => {
        const value = dataMap.get(d.properties.name);
        return bubbleSizeScale(value);
      })
      .attr("fill", (d) => colorScale(dataMap.get(d.properties.name)))
      .attr("opacity", 0.7)
      .attr("stroke", "#fff")
      .attr("stroke-width", 1);

    // Tooltip setup
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "world-map-tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("padding", "5px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "3px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Tooltip for countries
    svg
      .selectAll(".country")
      .on("mouseover", (event, d) => {
        const value = dataMap.get(d.properties.name);
        if (value !== undefined) {
          tooltip
            .style("opacity", 0.9)
            .html(tooltipFormatter({ country: d.properties.name, value }));
        }
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 10}px`).style("top", `${event.pageY - 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      });

    return () => {
      tooltip.remove();
    };
  }, [width, height, data, colorScale, valueAccessor, countryAccessor, minValue, maxValue, geoData]);

 return (
   <Box sx={{ display: "flex", flexDirection: "column" }}>
     {/* Legend at the Top */}
     <Box
       sx={{ display: "flex", justifyContent: "space-evenly", gap: 1, mb: 2 }}
     >
       <CustomTypography
         sx={{
           fontWeight: "600",
           fontSize: "1rem",
         }}
       >
         {title}
       </CustomTypography>
       {[minValue, (minValue + maxValue) / 2, maxValue].map((val, index) => (
         <Box
           key={index}
           sx={{ display: "flex", alignContent: "center !important", gap: 1 }}
         >
           <Box
             sx={{
               width: 20,
               height: 20,
               backgroundColor: colorScale(val),
               border: "1px solid #ccc",
               borderRadius: "1rem",
             }}
           />
           <span>{val}</span>
         </Box>
       ))}
     </Box>

     {/* Map Container */}
     {!geoData && <CircularProgress />}
     <Box
       sx={{
         width: "100%",
         maxHeight: "8rem",
         display: "flex",
         justifyContent: "center",
       }}
     >
       <svg
         ref={svgRef}
        //  style={{
        //    objectFit: "contain",
        //    width:"100%",
        //  }}
       ></svg>
     </Box>
   </Box>
 );

};

export default WorldMapChart;
