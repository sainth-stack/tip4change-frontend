import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";
import CustomTypography from "../../TypoGraphy/CustomTypography";

// Register ChartJS components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
//props section --------------------------------
const MultiLineChart = ({
  dataSets = [],
  labels = [],
  title = "CO₂ Emission Trends",
  usePointStyle,
  LegendBoxWidth,
  LegendBoxHeight,
  tension,
  xGridShow,
  yGridShow,
  UnitType,

  //props section --------------------------------
}) => {
  // console.log("usePointStyle",usePointStyle)
  const chartData = {
    labels,
    datasets: dataSets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.borderColor || "#6B5B34",
      backgroundColor: dataset.backgroundColor || "rgba(107, 91, 52, 0.3)",
      borderWidth: 2,
      pointRadius: 0,
      tension: tension || 0, // Remove points
    })),
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: usePointStyle ? true : false, // Makes legend items rounded
          boxWidth: LegendBoxWidth || 10,
          boxHeight: LegendBoxHeight || 10,
          color: "#1C1C1E",
        },
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: xGridShow || false }, // Hide grid lines on X-axis
      },
      y: {
        ticks: { color: "#666", callback: (val) => `${val}${UnitType||""}` }, // Add "kg" unit
        beginAtZero: false,
        grid: {
          display: yGridShow || false,
          color: "rgba(0, 0, 0, 0.15)", // Lighter grid lines
          borderDash: [2, 10], // Dotted effect (2px dash, 5px gap)
          lineWidth: 0.5, // Make grid lines very thin
        },
        border: {
          display: false, // Hide axis line
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Hide points on the line
        hoverRadius: 0, // Prevent showing points on hover
      },
    },
  };

  return (
    <>
      <CustomTypography
        sx={{
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        {title}
      </CustomTypography>

      <Box style={{ minHeight: "12rem", maxHeight: "12rem" }}>
        <Line data={chartData} options={options} />
      </Box>
    </>
  );
};

export default MultiLineChart;
