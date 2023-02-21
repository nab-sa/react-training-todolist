import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList"
import { TaskType } from "./models/Task";


const App = () => {
  const title = "To do list";
  // const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState(data);
  const  [taskEdit, setTaskEdit] = useState<TaskType | null >(null);

  const updateTaskState = (taskId: number) => {
    const updatedTasks: TaskType[] = tasks.map((task) => {
      if (task.id === taskId) {
        task.done? task.done = false : task.done = true;
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();

    if(taskToEditId != null) {
      const editedTask = tasks.find((task) => task.id === taskToEditId);
      if (editedTask) {
        editedTask.title = event.target.title.value;
        editedTask.description = event.target.description.value;
      }
      setTaskEdit(null);
    } else {
      const formData = new FormData(event.target)
      const newTask = Object.fromEntries(formData)
      const taskPlusId = {
        id: tasks[tasks.length - 1].id +1,
        title: String(newTask.title)!,
        description: String(newTask.description),
        done: false
      } 
      tasks.push(taskPlusId)
      setTaskEdit(null);
      console.log(taskPlusId)
      console.log(tasks)
    }

    setShowModal(false)
  };

  const editTask = (taskId: number) => {
    const taskEdit = tasks.find((task) => task.id === taskId)
    if (taskEdit) {
      setTaskEdit(taskEdit)
    }
    
    setShowModal(true)
    console.log(taskEdit)
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
      <TasksList deleteTask={deleteTask} tasks={tasks} editTask={editTask} updateTaskState={updateTaskState}/>
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
          taskEdit != null
            ? {
                id: taskEdit.id,
                title: taskEdit.title,
                description: taskEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
