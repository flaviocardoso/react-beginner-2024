import { Trash2 } from "lucide-react";
import { TODO } from "../types/todo";

interface TodoItemProps {
  todo: TODO;
  onCompletedChange: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({
  todo: { id, title, completed },
  onCompletedChange,
  onRemove,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="grow flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onCompletedChange(id, e.target.checked)}
          className="scale-125"
        />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </label>
      <button className="p-2" type="button" onClick={() => onRemove(id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
