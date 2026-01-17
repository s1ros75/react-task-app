import { Link } from "react-router-dom";
import styles from "../styles/taskDetail.module.css";
import type { Priority, Task } from "../../../types/task";

// Props の型定義：親コンポーネントから受け取る task は Task 型であることを明示
type Props = {
  task: Task;
};

export default function TaskDetail({ task }: Props) {
  // 優先度に応じたスタイルを返す関数
  const getPriorityClass = (priority: Priority): string => {
    switch (priority.toLowerCase()) {
      case "high":
        return styles.highPriority;
      case "medium":
        return styles.mediumPriority;
      case "low":
        return styles.lowPriority;
      default:
        return styles.defaultPriority;
    }
  };

  // ステータスのラベルを返す関数
  const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.description}>{task.description}</p>
      <p className={styles.info}>
        ステータス:{" "}
        <span className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
          {getStatusLabel(task.status)}
        </span>
      </p>
      <p className={styles.info}>
        優先度 : <span className={`${styles.badge} ${getPriorityClass(task.priority)}`}>{task.priority}</span>
      </p>
      <p className={styles.info}>期限日 : {task.dueDate}</p>
      <p className={styles.info}>作成日 : {new Date(task.createdAt).toLocaleString()}</p>
      <p className={styles.info}>更新日 : {new Date(task.updatedAt).toLocaleString()}</p>
      <div className={styles.links}>
        <Link to={`/tasks/${task.id}/edit`} className={styles.editLink}>
          編集する {/* ※ このページは後ほど作成します */}
        </Link>
        <Link to="/tasks" className={styles.backLink}>
          タスク一覧に戻る
        </Link>
      </div>
    </div>
  );
}
