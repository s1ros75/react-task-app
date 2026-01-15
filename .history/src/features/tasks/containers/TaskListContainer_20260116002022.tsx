import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../hooks/getTasks";
import { Task } from "../../../types/task";

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
    <div>
      <h1>タスク一覧</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Link to={`/tasks/${task.id}`}>
              <h3>{task.title}</h3>
            </Link>
            <p>ステータス : {task.status ? "完了" : "未完了"}</p>
            <p>優先度 : {task.priority}</p>
            <p>期限日 : {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
