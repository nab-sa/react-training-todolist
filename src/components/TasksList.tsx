import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";
import "./TasksList.css";

type TasksListProps = {
    tasks: TaskType[];
    deleteTask: (taskId: number) => void;
}

export const TasksList = ({tasks, deleteTask}: TasksListProps) => {
    
    return (
        <div className=".list-container">
            {tasks.map((obj: TaskType) => (
                <Task task={obj} key={obj.id} deleteTask={deleteTask}/>
              ))}
        </div>
    );
}
