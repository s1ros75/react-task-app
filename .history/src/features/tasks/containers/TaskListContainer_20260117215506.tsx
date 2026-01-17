import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>
      <div className={styles.taskListHeader}>  {/* タスク作成ページへのリンクを追加 */}
        <Link to="/tasks/new" className={styles.newTaskLink}>
          新規作成
        </Link>
      </div>
      <div className={styles.tableContainer}></div>
  );
}
