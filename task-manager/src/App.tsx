import TaskFilter from "./components/TaskFilter.tsx";
import TaskList from "./components/TaskList.tsx";
import { useState } from "react";
import type { Task, TaskFilterValues, TaskStatus } from "./types";
import "./App.css";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Homework",
    description: "Math",
    status: "pending",
    priority: "high",
    dueDate: "2026-04-30",
  },
  {
    id: "2",
    title: "Project",
    description: "Build app",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-05-02",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<TaskFilterValues>({});

  const shown = tasks.filter(
    (task) =>
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority),
  );

  const handleFilterChange = (nextFilters: TaskFilterValues) => {
    setFilters((prev) => ({ ...prev, ...nextFilters }));
  };

  const handleStatusChange = (taskId: string, nextStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={shown}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
