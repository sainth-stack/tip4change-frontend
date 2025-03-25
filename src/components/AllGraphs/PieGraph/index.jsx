import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography } from "@mui/material";
import CustomTypography from "../../TypoGraphy/CustomTypography";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);


//props section------------------------------------------------

const PieChart = ({
  dataSets = [],
  labels = [],
  title = "Pie Chart",
  usePointStyle = true,
  LegendBoxWidth,
  LegendBoxHeight,
  labelColor,

  //props section------------------------------------------------
}) => {
  const chartData = {
    labels,
    datasets: dataSets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || [
        "#847F3B",
        "#BEA881",
        "#e6e5d8",
        "#957951",
        "#BEA881",
      ],
      borderWidth: 2,

      borderColor: "#fff", // White border for sector separation
      // Increase border on hover
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: labelColor || "#000",
        font: { size: 12 },
        align: "center",
        offset: 20,
        formatter: (value) => {
          return ` ${value}%`;
        },
      },
      legend: {
        display: true,
        position: "right",

        labels: {
          usePointStyle: usePointStyle, // Makes legend items rounded
          boxWidth: LegendBoxWidth || 10,
          boxHeight: LegendBoxHeight || 10,
          color: "#1C1C1E",
        },
        backgroundColor: "rgba(200, 200, 200, 0.5)", // Adjusts size of legend icons
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#fff",
        hoverBorderWidth: 5, // Increased border width on hover
        hoverOffset: 2, // Creates larger gap effect on hover
        shadowColor: "rgba(0, 0, 0, 0.3)", // Adds elevation effect
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

      <Box style={{ minHeight: "15rem", maxHeight: "17rem" }} mt={2}>
        <Pie data={chartData} options={options} />
      </Box>
    </>
  );
};

export default PieChart;
