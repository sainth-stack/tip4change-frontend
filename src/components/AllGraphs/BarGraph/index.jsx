import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";
import CustomTypography from "../../TypoGraphy/CustomTypography";

// Register ChartJS components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
//bar grap props------------------------------------------------
const BarChart = ({
  data = [],
  labels = [],
  title = "Bar Chart",
  backgroundColors = ["#847f3b", "#847f3b", "#847f3b"],
  borderColor = "#fff",
  borderWidth = 1,
  legendDisplayed,
  //bar grap props------------------------------------------------
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        color: "#847f3b",
        label: title,
        data,
        backgroundColor: backgroundColors,
        borderColor,
        barThickness: 30,
        maxBarThickness: 30,
        borderWidth,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: legendDisplayed?true:false },
      tooltip: { enabled: true },
      datalabels: {
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
        display: true,
        barPercentage: 0.1,
        categoryPercentage: 0.1,
      },
      y: { beginAtZero: true },
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
      <Box style={{ minHeight: "16rem", maxHeight: "18rem" }}>
        <Bar data={chartData} options={options} />
      </Box>
    </>
  );
};

export default BarChart;
