import TaskFilter from "./components/TaskFilter.tsx";
import TaskList from "./components/TaskList.tsx";
import { useState } from "react";
import type { Task, TaskFilterValues, TaskStatus } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Homework", description: "Math", status: "pending", priority: "high", dueDate: "2026-04-30" },
    { id: "2", title: "Project", description: "Build app", status: "in-progress", priority: "medium", dueDate: "2026-05-02" },
  ]);
  const [filters, setFilters] = useState<TaskFilterValues>({});
  const shown = tasks.filter((t) => (!filters.status || t.status === filters.status) && (!filters.priority || t.priority === filters.priority));

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={(f) => setFilters((p) => ({ ...p, ...f }))} />
      <TaskList
        tasks={shown}
        onStatusChange={(id, s: TaskStatus) => setTasks((p) => p.map((t) => (t.id === id ? { ...t, status: s } : t)))}
        onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
      />
    </div>
  );
}

export default App;
