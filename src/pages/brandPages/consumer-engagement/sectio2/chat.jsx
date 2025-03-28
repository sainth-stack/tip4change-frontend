import { Card, CardContent, Box, Typography } from "@mui/material";
import { CommonDoughnutChart } from "../../../../components/chatjsDoughnutChart/commonCharts";
import { chartConfigs } from "../../../../components/chatjsDoughnutChart/data";
import CustomTypography from "../../../../components/TypoGraphy/CustomTypography";

export const DoughnutChartComponent1 = () => {
  const chartConfig = chartConfigs?.sentiment; // Use the correct chart config

  if (!chartConfig) {
    return <Typography>Error: Chart configuration not found!</Typography>;
  }

  return (
    <Card
      sx={{
        width: "100%",
        height: 250,
        borderRadius: 2,
        backgroundColor: "#FFFFFF",
        boxShadow: "6px 6px 54px 0px #0000000D",
        display: "flex",
        flexDirection:'column',
        alignItems: "start",
        justifyContent: "center",
        padding: 3,
      }}
    >
       <CustomTypography
        sx={{
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        {"Consumer Sentiment Analysis"}
      </CustomTypography>
      <CardContent sx={{ display: "flex", gap: "150px", flexWrap: "wrap", alignItems: "center",marginTop:'10px' }}>
        <Box sx={{ position: "relative", width: 200, height: 190 }}>
          <CommonDoughnutChart {...chartConfig} />
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
