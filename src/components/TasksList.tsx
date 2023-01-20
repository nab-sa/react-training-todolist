import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";
import "./TasksList.css";

type TasksListProps = {
    tasks: TaskType[];
}

export const TasksList = ({tasks}: TasksListProps) => {
    
    return (
        <div className=".list-container">
            {tasks.map((obj: TaskType) => (
                <Task task={obj}/>
              ))}
        </div>
    );
}
