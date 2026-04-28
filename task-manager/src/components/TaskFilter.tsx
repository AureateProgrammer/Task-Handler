import type { TaskFilterProps, TaskPriority, TaskStatus } from "../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <section className="filter-bar">
      <select
        defaultValue=""
        onChange={(e) =>
          onFilterChange({ status: (e.target.value || undefined) as TaskStatus | undefined })
        }
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select
        defaultValue=""
        onChange={(e) =>
          onFilterChange({ priority: (e.target.value || undefined) as TaskPriority | undefined })
        }
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </section>
  );
}
