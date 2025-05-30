import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const CommonDoughnutChart = ({ chartData, options, width = "208px", height = "208px" }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "240px", sm: width },
        height: { xs: "240px", sm: height },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Doughnut
  data={chartData}
  options={{
    ...options,
    responsive: true,
    maintainAspectRatio: false,  // Lets you control width/height freely
    cutout: "68%",              // Adjusts ring thickness (smaller = thicker)
  }}
  // Set explicit width/height via wrapper (or use CSS)
  style={{ width: "800px", height: "500px" }}  // Bigger dimensions
/>
      <Box sx={{ position: "absolute", textAlign: "center" }}>
        <Typography variant="body2" fontWeight="500" color="textSecondary">
          {chartData.labels[0]}
        </Typography>
        <Typography variant="h6" fontWeight="600">
          {chartData.datasets[0].data[0]}%
        </Typography>
      </Box>
    </Box>
  );
};
