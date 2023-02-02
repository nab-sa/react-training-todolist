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

    // FormData(form)

    // const form = event.target
    let formData = new FormData(event.target);
    let newTask = Object.fromEntries(formData);
    // console.log(typeof formData.get('title'))
    // console.log(formData)
    // for (let val in newTask) {
      
    //     const newTask = {
    //       id: tasks.length + 1,
    //       title: val,
    //       description: val,
    //       done: false
    //     }
    //     tasks.push(newTask)
    //     console.log(newTask)
    //     console.log(tasks)
    //  }
    const taskPlusId = {
      id: tasks[tasks.length - 1].id + 1,
      title: String(newTask.title),
      description: String(newTask.description),
      done: false
    }

    tasks.push(taskPlusId);
    setShowModal(false);
    console.log(tasks[0]);


    
    // console.log(formData.get(title))
    
    
    // tasks.push(newTask)
    
    // {taskToEditId: tasks[tasks.length + 1]}
    
    

    
    
    
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
