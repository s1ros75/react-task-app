import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>タスク管理アプリ</h1>
      <p>React×Vite×React Routerで作るタスク管理アプリです。</p>
      <Link to="/tasks">タスク一覧へ</Link>
    </div>
  );
}