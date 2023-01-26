import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList"


const App = () => {
  const title = "To do list";
  // const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState(data);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    
    
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    const copyTask = tasks.filter((task) => task.id !== taskId);
    setTasks(copyTask);
    // copyTask.splice(taskId, 1);
    // console.log(copyTask)
    // setTasks(copyTask);
    // console.log(taskId)
    // delete tasks[taskId]
    
  };

  return (
    <div className="main">
      <Header title={title} />
      <TasksList deleteTask={deleteTask} tasks={tasks}/>
      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() =>
          setShowModal(false)
        }
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
