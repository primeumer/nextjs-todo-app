"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./page.css";

type Task = {
  id: number;
  name: string;
  completed: boolean;
};
export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  function addTask() {
    if (task.trim() === "") {
      alert("Please Enter your Task");
      return;
    }
    const newTask: Task = {
      id: Date.now(),
      name: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }
  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  function completeTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  return (
    <div className="container">
      <h1>TODO LIST APP</h1>
      <div className="input-area">
      <input
        type="text"
        placeholder="Enter your Task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.name}{task.completed ? "✔" : ""}
            <div className="buttons">
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => completeTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/completed">
  <button>View Completed Tasks</button>
</Link>
    </div>
  );
}
