"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
type Task = {
  id: number;
  name: string;
  completed: boolean;
};
export default function CompletedPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div>
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            {task.name} ✔
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
}