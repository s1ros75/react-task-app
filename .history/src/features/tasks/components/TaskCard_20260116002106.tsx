import { Link } from "react-router-dom";
import { Task } from "../../../types/task";

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  return (
    <div>
      <Link to={`/tasks/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p>ステータス : {task.status ? "完了" : "未完了"}</p>
      <p>優先度 : {task.priority}</p>
      <p>期限日 : {task.dueDate}</p>
      <Link to={`/tasks/${task.id}`}>詳細</Link>
    </div>
  );
}
