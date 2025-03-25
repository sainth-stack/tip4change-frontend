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
} from "chart.js";
import { Box } from "@mui/material";
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

//area graph props ------------------------
const AreaChart = ({
  dataSets = [],
  labels = [],
  title = "",
  subHeading = ""
}) => {
  //area graph props ------------------------

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;

      // Apply gradient fill dynamically
      dataSets.forEach((dataset) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)"); // Start with white
        gradient.addColorStop(1, "#847f3b"); // End with dark gold

        dataset.backgroundColor = gradient;
      });
    }
  }, [dataSets]);

  const chartData = {
    labels,
    datasets: dataSets.map((dataset) => ({
      ...dataset,
      borderWidth: 2,
      pointRadius: 0, // Hide points
      fill: true,
      tension: 0.5, // Enable area fill
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend for cleaner look
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
      },
      datalabels: {
        display: false,
        color: "#000",
        font: { size: 12 },
        anchor: "end",
        align: "top",
        offset: -5,
        formatter: (value) => `${value}%`,
      },
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false }, // Hide grid lines on X-axis
      },
      y: {
        display: false,
        // ticks: { color: "#666", callback: (val) => `${val}%` }, // Add "%" unit
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
          borderDash: [5, 20], // Dashed effect
        },
      },
    },
  };

  return (
    <>
      <CustomTypography sx={{ fontWeight: "600", fontSize: "1rem",marginBottom:1 }}>
        {title}
      </CustomTypography>
      <small
        style={{
          fontSize: "10px",
          letterSpacing: "0px",
          margin: "0",
          fontWeight:"400",
          padding: "0",
          lineHeight: "1",
          display: "block",
        }}
      >
        {subHeading}
      </small>

      <Box style={{ minHeight: "14rem", maxHeight: "14rem" }}>
        <Line data={chartData} options={options} />
      </Box>
    </>
  );
};

export default AreaChart;
