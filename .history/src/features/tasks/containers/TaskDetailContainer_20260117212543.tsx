import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../hooks/getTaskById";
import { Task } from "../../../types/task";

export default function TaskDetailContainer() {
  // URLからタスクIDを取得
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | null>(null);

  // コンポーネントマウント時に、指定されたIDのタスクを取得
  useEffect(() => {
    if (!id) return;

    async function fetchTask() {
      const fetchedTask = await getTaskById(id);
      setTask(fetchedTask ?? null);
    }
    fetchTask();
  }, [id]);

  // タスクがまだ取得できていない場合はローディング表示
  if (!task) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        読み込み中...
      </div>
    );
  }

  return <div></div>;
}