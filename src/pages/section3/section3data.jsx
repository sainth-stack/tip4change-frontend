import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const DoughnutChartComponent = ({ label, percentage, width, height }) => {
  const chartData = {
    labels: [label, "Uncertified"],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#847F3B", "#E0E0E0"],
        hoverBackgroundColor: ["#6A6330", "#D1D1D1"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%", // Makes space for the label inside
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        display: false, // Hide default datalabels from the plugin
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "208px", sm: width }, // Reduce size on smaller screens
        height: { xs: "208px", sm: height },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:"20px"
      }}
    >
      <Doughnut data={chartData} options={options} />
      {/* Centered label and percentage */}
      <Box sx={{ position: "absolute", textAlign: "center" }}>
        <Typography variant="body2" fontWeight="500" color="textSecondary">
          {label}
        </Typography>
        <Typography variant="h6" fontWeight="600">
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
};
