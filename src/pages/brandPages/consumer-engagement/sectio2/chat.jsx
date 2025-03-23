import { CommonDoughnutChart } from "../../../../components/chatjsDoughnutChart/commonCharts";
import { chartConfigs } from "../../../../components/chatjsDoughnutChart/data";
import { Box, Typography } from "@mui/material";

export const DoughnutChartComponent1 = () => {
  const chartConfig = chartConfigs?.sentiment; // Use the correct chart config

  if (!chartConfig) {
    return <Typography>Error: Chart configuration not found!</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {/* Chart Component */}
      <Box sx={{ position: "relative", width: 230, height: 220 }}>
        <CommonDoughnutChart {...chartConfig} />

        {/* Centered Text Inside Chart */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {/* <Typography variant="body1" fontWeight="500">
            Consumer
          </Typography>
          <Typography variant="body1" fontWeight="500">
            Analysis
          </Typography> */}
        </Box>
      </Box>

      {/* Dynamic Legend */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {chartConfig.chartData?.labels?.map((label, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 15,
                height: 15,
                backgroundColor: chartConfig.chartData?.datasets[0]?.backgroundColor[index] || "#ccc",
                borderRadius: "3px",
              }}
            />
            <Typography variant="body2" fontWeight="500">{label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
