import React from "react";
import { Card, CardContent, Typography, Checkbox,Grid } from "@mui/material";

const TaskItem = ({ task, onChange }) => {
  return (
        <Grid sx={{minWidth:"450px",maxWidth:"524px", marginLeft:{md:"-50px",lg:"-50px"}}}>
                <Card
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: task.completed ? "2px solid olive" : "1px solid gold",
        borderRadius: "20px",
        marginBottom: "8px",
        padding: "8px",
        height:"70px"
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight:"500",fontFamily:"montserrat",fontSize:"15px",lineHeight:"17px",letterSpacing:"0.15px", }}>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily:"montserrat",fontWeight:'400',fontSize:"12px",lineHeight:"16px",paddingTop:"3px"}}>
          {task.description}
        </Typography>
      </CardContent>
      <Checkbox
        checked={task.completed}
        onChange={() => onChange(task.id)}
        sx={{ color: "olive" }}
      />
    </Card>
        </Grid>
  );
};

export default TaskItem;
