import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  return (
    <div>
      <TaskFilter />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
