import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Button, Grid,Typography,Box,Breadcrumbs } from "@mui/material";
import TaskList from "../../components/TaskList/taskItem"
import CustomTypography from '../../components/TypoGraphy/CustomTypography';
import { useLocation } from 'react-router-dom';
import { chartData,options } from "./data";
import NavigationHeader from '../../layout/NavigationHeader'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DoughnutChart = () => {

      const location = useLocation();
      const pathnames = location.pathname.split('/').filter((x) => x);
    
  return (
    <Grid>

                     
                  <Box sx={{fontFamily:"Montserrat",paddingLeft:"10px"}} >
                  <NavigationHeader path={pathnames}  PageText="Payment Section"  />
                  </Box>
         {/* <Box sx={{ }}>
            <CustomTypography color="text.primary">Progress Tracking</CustomTypography>
            <Breadcrumbs separator="››" aria-label="breadcrumb">
              <CustomTypography color="text.primary">Home</CustomTypography>
                {pathnames.map((value, index) => (
              <CustomTypography key={index} color="text.primary">
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </CustomTypography>
                ))}
            </Breadcrumbs>
            </Box> */}
        
    <Typography
      variant="h6"
      sx={{
        fontFamily: "Montserrat",
        fontSize:"20px",
        fontWeight:"500",
        lineHeight:"150%",
        color: "black",
        paddingTop:{xs:"20px",md:"40px"},
        paddingBottom:{xs:"20px"},
        paddingLeft:{xs:"10px",md:"10px"}
      }}
    >
      Drinking Water - Saidapet Girls Higher Secondary School
    </Typography>

    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column in xs, row in md+
        justifyContent: { xs: "center", md: "space-between" }, // Center in xs, space-between in md+
        alignItems: "center",
        
      }}
    >
      {/* Doughnut Chart and Legend */}
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          display: {md:"flex"},
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {xs:"column",md:"row"},
          flex: 1, // Ensures equal spacing
        }}
      >
        <div style={{ position: "relative", width: "100%", maxWidth: "300px", height: "300px"}}>
          <Doughnut data={chartData} options={options} />
        </div >
        <Box
  sx={{
    marginLeft: { xs: 0, md: "25px" } // No margin on xs, applies -100px on md & lg
  }}
>
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px", alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <div style={{ width: "15px", height: "15px", backgroundColor: "#7A713B" }}></div>
      <span style={{ fontSize: "14px", color: "#333" }}>Completed</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "5px", paddingLeft: "12px" }}>
      <div style={{ width: "15px", height: "15px", backgroundColor: "#E0DEC9" }}></div>
      <span style={{ fontSize: "14px", color: "#333" }}>InCompleted</span>
    </div>
  </div>
</Box>

    
      </Grid>

      {/* Task List */}

    <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1, // Ensures equal space in row layout
          gap:"0px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" ,marginTop:"30px",height:"60px" }}>
          <Typography sx={{fontWeight:600,fontFamily:"Montserrat",marginLeft:{md:"30px"},fontSize:"20px",lineHeight:"150%"}}>Task list</Typography>
         <Box sx={{marginRight:{md:"55px"}}}>
         <Button
            sx={{
              height: "50px",
              width: "146px",
              backgroundColor: "#847f3b",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "capitalize",
              fontWeight:"500",
              fontSize:"18px",
              align:"center",
              fontFamily:"Montserrat",
              lineHeight:"18px",
              
              "&:hover": { backgroundColor: "#5f6340" },
            }}
          >
            + Add Item
          </Button>
         </Box>
        </div>
        <TaskList />
      </Grid>

    </Grid>
    </Grid>
  );
};

export default DoughnutChart;
