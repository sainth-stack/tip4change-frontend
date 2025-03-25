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
import { Box } from "@mui/material";
import CustomTypography from "../../TypoGraphy/CustomTypography";

// Register ChartJS components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

//props section------------------------------------------------

const MultiBarChart = ({
  xGridDisplay,
  YGridDisplay,
  datasets = [],
  labels = [],
  title = "Multi-Bar Chart",
  yAxisTitle="",
  legendShow,
  xAxisTitle = ""
  

  //   //props section------------------------------------------------
}) => {
  const chartData = {
    labels,
    datasets: datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || ["#847f3b", "#bea881"][index], // Dynamic colors
      borderColor: dataset.borderColor || "#fff",
      borderWidth: dataset.borderWidth || 1,
      barThickness: 70,
      maxBarThickness: 70,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: legendShow ? true : false },
      tooltip: { enabled: true },
      datalabels: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
          color: "#000",
        },
        grid: { display: xGridDisplay },
        display: true,
        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
          color: "#000",
        },
        grid: { drawBorder: false, display: YGridDisplay },
        beginAtZero: true,
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
      <Box style={{ minHeight: "25rem", maxHeight: "25rem" }} mt={2}>
        <Bar data={chartData} options={options} />
      </Box>
    </>
  );
};

export default MultiBarChart;
