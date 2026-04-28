type Task = { id: string; title: string; status: string };
type Props = {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: string) => void;
  onDelete: (taskId: string) => void;
};

export default function TaskList({ tasks, onStatusChange, onDelete }: Props) {
  return <div>{tasks.map((t) => <div key={t.id}><span>{t.title} ({t.status}) </span><button onClick={() => onStatusChange(t.id, "completed")}>Complete</button><button onClick={() => onDelete(t.id)}>Delete</button></div>)}</div>;
}
