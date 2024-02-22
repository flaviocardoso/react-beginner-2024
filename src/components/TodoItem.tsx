import { Trash2 } from "lucide-react";
import { TODO } from "../types/todo";
import { useTodos } from "../lib/useTodo";

interface TodoItemProps {
  todo: TODO;
}

export default function TodoItem({
  todo: { id, title, completed },
}: TodoItemProps) {
  const { setTodoCompleted, removeTodo } = useTodos();
  return (
    <div className="flex items-center gap-1">
      <label className="grow flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setTodoCompleted(id, e.target.checked)}
          className="scale-125"
        />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </label>
      <button className="p-2" type="button" onClick={() => removeTodo(id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
