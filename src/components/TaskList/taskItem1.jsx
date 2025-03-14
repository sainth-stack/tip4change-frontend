import React from "react";
import { Card, CardContent, Typography, Checkbox,Grid } from "@mui/material";

const TaskItem = ({ task, onChange }) => {
  return (
        <Grid sx={{minWidth:"500px"}}>
                <Card
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: task.completed ? "2px solid olive" : "1px solid gold",
        borderRadius: "12px",
        marginBottom: "8px",
        padding: "8px",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
