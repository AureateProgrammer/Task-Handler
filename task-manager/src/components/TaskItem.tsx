import type { TaskItemProps, TaskStatus } from "../types";

function nextStatus(current: TaskStatus): TaskStatus {
  if (current === "pending") return "in-progress";
  if (current === "in-progress") return "completed";
  return "pending";
}

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <article className={`task-card status-${task.status} priority-${task.priority}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className="task-badges">
          <span className={`badge status-badge ${task.status}`}>{task.status}</span>
          <span className={`badge priority-badge ${task.priority}`}>{task.priority}</span>
        </div>
      </div>
      <p>{task.description}</p>
      <small>Due: {task.dueDate}</small>
      <div className="task-actions">
        <button type="button" onClick={() => onStatusChange(task.id, nextStatus(task.status))}>
          Next Status
        </button>
        <button type="button" className="danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
