import React from "react";
import { TaskType } from "../models/Task"
import "./Task.css";


type TaskProps = {
  task: TaskType;
  deleteTask: (taskId: number) => void;
  
};


export const Task = ({task, deleteTask}: TaskProps) => {

  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} onChange={() => console.log('')}/>
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => console.log("edit")}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};
