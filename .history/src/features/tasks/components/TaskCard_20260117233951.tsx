import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import { getPriorityClass } from "../utils/priority"; // getPriorityClass関数をimport
import { getStatusLabel } from "../utils/status-label"; // getStatusLabel関数をimport
import type { Task } from "../../../types/task";

// ... (import部分は変更なし)

export default function TaskCard({ task, onToggleStatus }: Props) {

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";
    if (onToggleStatus) {
      onToggleStatus(task.id, newStatus);
    }
  };

  return (
    <div className={styles.taskCard}>
      {/* 1. タイトル */}
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>

      {/* 2. ステータス */}
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        <option value="false">{getStatusLabel(false)}</option>
        <option value="true">{getStatusLabel(true)}</option>
      </select>

      {/* --- ここから追加 --- */}

      {/* 3. 優先度 */}
      <div className={`${styles.priority} ${getPriorityClass(task.priority, styles)}`}>
        {task.priority}
      </div>

      {/* 4. 期限日 */}
      <div className={styles.dueDate}>
        {task.dueDate}
      </div>

      {/* --- ここまで追加 --- */}
    </div>
  );
}

// type Props = {
//   task: Task;
//   onToggleStatus: (taskId: Task['id'], newStatus: boolean) => void;
// };

// export default function TaskCard({ task, onToggleStatus }: Props) {  // onToggleStatusをpropsで受け取る

//   // ステータス変更時のハンドラー
//   const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newStatus = e.target.value === "true";
//     if (onToggleStatus) {
//       onToggleStatus(task.id, newStatus);
//     }
//   };

//   return (
//     <div className={styles.taskCard}>
//       <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
//         <h3 className={styles.taskTitle}>{task.title}</h3>
//       </Link>
//       {/* ステータスをセレクトボックスに変更 */}
//       <select
//         value={task.status ? "true" : "false"}
//         onChange={handleStatusChange}
//         className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
//       >
//         <option value="false">{getStatusLabel(false)}</option>  {/* 未完了の場合のラベル */}
//         <option value="true">{getStatusLabel(true)}</option>    {/* 完了の場合のラベル */}
//       </select>
//     </div>
//   );
// }
