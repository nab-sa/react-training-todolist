import React from "react";
import { TaskType } from "../models/Task"
import "./Task.css";
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';



type TaskProps = {
  task: TaskType;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number) => void
  updateTaskState: (taskId: number) => void
  
};

export const Task = ({task, deleteTask, editTask, updateTaskState}: TaskProps) => {

  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={task.done} onChange={() => updateTaskState(task.id)}/>
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}><AiOutlineEdit /></button>
        <button onClick={() => deleteTask(task.id)}><AiOutlineDelete /></button>
      </div>
    </div>
  );
};
