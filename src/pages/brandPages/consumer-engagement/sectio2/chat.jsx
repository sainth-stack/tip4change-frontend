import { Card, CardContent, Box, Typography } from "@mui/material";
import { CommonDoughnutChart } from "../../../../components/chatjsDoughnutChart/commonCharts";
import { chartConfigs } from "../../../../components/chatjsDoughnutChart/data";

export const DoughnutChartComponent1 = () => {
  const chartConfig = chartConfigs?.sentiment; // Use the correct chart config

  if (!chartConfig) {
    return <Typography>Error: Chart configuration not found!</Typography>;
  }

  return (
    <Card
      sx={{
        width: 546,
        height: 295,
        borderRadius: 2,
        backgroundColor: "#FFFFFF",
        boxShadow: "6px 6px 54px 0px #0000000D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <CardContent sx={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
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
      </CardContent>
    </Card>
  );
};
