import { Link } from "react-router-dom";
import styles from "../styles/taskDetail.module.css";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";
import type { Task } from "../../../types/task";

type Props = {
  task: Task;
};

export default function TaskDetail({ task }: Props) {
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
        優先度 : <span className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}>{task.priority}</span>
      </p>

      {/* 戻るリンクの例 */}
      <Link to="/" className={styles.backLink}>
        一覧へ戻る
      </Link>
    </div> // 1. ここで div を閉じる
  ); // 2. ここで return を閉じる
} // 3. ここで TaskDetail 関数を閉じる
