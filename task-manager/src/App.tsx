import TaskFilter from "./components/TaskFilter.tsx";
import TaskList from "./components/TaskList.tsx";
import Taskitem from "./components/TaskItem.tsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{ id: "1", title: "Homework", status: "pending" }, { id: "2", title: "Project", status: "in-progress" }]);
  const [status, setStatus] = useState("");
  const shown = status ? tasks.filter((t) => t.status === status) : tasks;

  return (
    <div>
      <h1>Task Manager</h1>
      <Taskitem></Taskitem>
      <TaskFilter onFilterChange={(f) => setStatus(f.status ?? "")} />
      <TaskList
        tasks={shown}
        onStatusChange={(id, s) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: s } : t)))}
        onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
      />
    </div>
  );
}

export default App;
