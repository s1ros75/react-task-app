import { Link } from "react-router-dom";
import type { Priority, Task } from "../../../types/task";
import styles from "../styles/taskCard.module.css";

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  // 優先度に応じたクラス名を返す関数
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

  // ステータスに応じた表示ラベルを返す関数
  const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了";
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <p className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
        {getStatusLabel(task.status)}
      </p>
      <p className={`${styles.badge} ${getPriorityClass(task.priority)}`}>{task.priority}</p>
      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}



import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import { getPriorityClass } from "../utils/priority"; // getPriorityClass関数をimport
import { getStatusLabel } from "../utils/status-label"; // getStatusLabel関数をimport
import { Task } from "../../../types/task";

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <p className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
        {getStatusLabel(task.status)}
      </p>{" "}
      {/* importしたgetStatusLabel関数を使用して、引数にstatusを渡す */}
      <p className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}>{task.priority}</p>{" "}
      {/* importしたgetPriorityClass関数を使用して、引数にpriorityとstylesを渡す */}
      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
}
