import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Box } from "@mui/material";
import CustomTypography from "../../TypoGraphy/CustomTypography";

// Register ChartJS components - Make sure to include Filler for area charts
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = ({
  dataSets = [],
  labels = [],
  title = "",
  subHeading = ""
}) => {
  const chartRef = useRef(null);

  // Create a function to generate the gradient
  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(
      0, chartArea.bottom, 
      0, chartArea.top
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)"); // End with white at top
    gradient.addColorStop(1, "#847F3B"); // Start with your gold color at bottom
    return gradient;
  };

  const chartData = {
    labels,
    datasets: dataSets.map((dataset) => ({
      ...dataset,
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.5,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        return getGradient(ctx, chartArea);
      },
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
      },
      datalabels:{
        display:false
      }
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false },
      },
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
          borderDash: [5, 20],
        },
      },
    },
    elements: {
      line: {
        borderColor: "#847F3B", // Set your line color
      },
    },
  };

  return (
    <>
      <CustomTypography sx={{ fontWeight: "600", fontSize: "1rem", marginBottom: 1 }}>
        {title}
      </CustomTypography>
      <small
        style={{
          fontSize: "10px",
          letterSpacing: "0px",
          margin: "0",
          fontWeight: "400",
          padding: "0",
          lineHeight: "1",
          display: "block",
        }}
      >
        {subHeading}
      </small>

      <Box style={{ minHeight: "14rem", maxHeight: "14rem" }}>
        <Line ref={chartRef} data={chartData} options={options} />
      </Box>
    </>
  );
};

export default AreaChart;