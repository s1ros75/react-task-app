import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import type { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
// import { Link } from "react-router-dom";
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

  // export default function TaskListContainer() {
  //   const [tasks, setTasks] = useState<Task[]>([]);

  //   // タスク一覧を取得する関数
  //   const fetchTasks = async () => {
  //     const fetchedTasks = await getTasks();
  //     setTasks(fetchedTasks);
  //   };

  //   useEffect(() => {
  //     fetchTasks();
  //   }, []);

  //   // セレクトボックスで変更されたステータスを更新する処理
  //   const handleToggleStatus = async (taskId: Task['id'], newStatus: boolean) => {
  //     await updateTask(String(taskId), { status: newStatus });
  //     fetchTasks();
  //   };

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggleStatus={handleToggleStatus} />
          ))}
        </div>
      </div>
    </div>
  );
}
