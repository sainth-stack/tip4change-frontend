import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import TaskItem from "./taskItem1";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description", completed: true },
    { id: 2, title: "Task 1", description: "Description", completed: false },
    { id: 3, title: "Task 1", description: "Description", completed: false },
    { id: 4, title: "Task 1", description: "Description", completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div>
      {/* <TextField
        label="Update Task Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setTasks(tasks.map(task => ({ ...task, title: e.target.value })))}
        sx={{ marginBottom: "16px" }}
      /> */}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onChange={handleCheckboxChange} />
      ))}
    </div>
  );
};

export default TaskList;
