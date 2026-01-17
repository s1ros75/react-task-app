import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
import { updateTask } from "../hooks/updateTask"; // updateTask関数をインポート

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // データを取得する関数を独立させる（更新後にも呼べるようにするため）
  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleToggleStatus = async (taskId: Task["id"], newStatus: boolean) => {
    await updateTask(String(taskId), { status: newStatus });
    await fetchTasks(); // ここで関数として正しく呼び出す
  };

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>
      <div className={styles.taskListHeader}>
        {" "}
        <Link to="/tasks/new" className={styles.newTaskLink}>
          新規作成
        </Link>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div> {/* ← この列に対応するデータが */}
          <div>期限日</div> {/* ← TaskCard 内にあるか確認が必要 */}
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus} // 更新用関数を渡す必要がある場合
            />
          ))}
        </div>
      </div>
    </div>
  );
}
