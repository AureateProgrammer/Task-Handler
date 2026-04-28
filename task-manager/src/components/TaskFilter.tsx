type Props = { onFilterChange: (filters: { status?: string }) => void };

export default function TaskFilter({ onFilterChange }: Props) {
  return (
    <select defaultValue="" onChange={(e) => onFilterChange({ status: e.target.value || undefined })}>
      <option value="">All</option><option value="pending">Pending</option><option value="in-progress">In Progress</option><option value="completed">Completed</option>
    </select>
  );
}
