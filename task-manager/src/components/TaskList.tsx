import TaskItem from "./TaskItem.tsx";
import type { TaskListProps } from "../types";

export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks match your filters.</p>;
  }

  return (
    <section className="task-grid">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
