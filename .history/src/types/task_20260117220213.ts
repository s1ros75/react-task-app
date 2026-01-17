type Priority = "high" | "medium" | "low";

interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

type TaskFormData = Omit<Task, "id" | "status" | "createdAt" | "updatedAt">;

// 個別に export するのではなく、最後にまとめて export する
export type { Priority, Task, TaskFormData };
