import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import { getPriorityClass } from "../utils/priority"; // getPriorityClass関数をimport
import { getStatusLabel } from "../utils/status-label"; // getStatusLabel関数をimport
import type { Task } from "../../../types/task";

type Props = {
  task: Task;
  onToggleStatus: (taskId: Task['id'], newStatus: boolean) => void;
};

export default function TaskCard({ task, onToggleStatus }: Props) {  // onToggleStatusをpropsで受け取る

  // ステータス変更時のハンドラー
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";
    if (onToggleStatus) {
      onToggleStatus(task.id, newStatus);
    }
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      {/* ステータスをセレクトボックスに変更 */}
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        <option value="false">{getStatusLabel(false)}</option>  {/* 未完了の場合のラベル */}
        <option value="true">{getStatusLabel(true)}</option>    {/* 完了の場合のラベル */}
      </select>
    </div>
  );
}




import { Task } from "../../../types/task";
import { getStatusLabel } from "../utils/status-label";
import { getPriorityClass } from "../utils/priority";
import styles from "../styles/TaskCard.module.css"; // パスは環境に合わせてください

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  return (
    <div className={styles.card}>
      {/* 1. タスク名 */}
      <div className={styles.title}>{task.title}</div>

      {/* 2. ステータス */}
      <div className={styles.status}>{getStatusLabel(task.status)}</div>

      {/* 3. 優先度（ここが抜けていませんか？） */}
      <div className={`${styles.priority} ${getPriorityClass(task.priority, styles)}`}>{task.priority}</div>

      {/* 4. 期限日（ここが抜けていませんか？） */}
      <div className={styles.dueDate}>{task.dueDate}</div>
    </div>
  );
}
