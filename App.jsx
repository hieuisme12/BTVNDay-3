import React, { useState } from "react";
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Create a react project", completed: false, time : new Date().toLocaleDateString() },
    { id: 2, text: "Learn React", completed: false, time : new Date().toLocaleDateString()},
    { id: 3, text: "Create a Todo App", completed: false, time : new Date().toLocaleDateString()}
  ]);

  const [newTask, setNewTask] = useState("");
  /*thêm*/
  const handleAddTask = () => {
    const task = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
      time: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };
  /*xóa*/
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  /*sửa*/
  const handleEditTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText, time: new Date().toLocaleDateString() } : task))
    );
  };
  /*note hoàn thành*/
  const toggleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>TODO LIST</h1>

      {/*thêm task*/}
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="CristianRonaldo"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/*ds*/}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleteTask(task.id)}
            />
            <span>{task.text}</span>
            <span className="task-time">{task.time}</span>
            {/*nút sửa và xóa*/}
            <button onClick={() => handleDeleteTask(task.id)}>🗑️</button>
            <button onClick={() => handleEditTask(task.id, prompt("Edit task", task.text))}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
