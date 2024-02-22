import TodoItem from "./TodoItem";
import { useTodos } from "../lib/useTodo";

export default function TodoList() {
  const { todos } = useTodos();
  const todosSorted = [...todos].sort((a, b) =>
    Boolean(a.completed) === Boolean(b.completed)
      ? b.id - a.id
      : a.completed
      ? 1
      : -1
  );

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // onCompletedChange={setTodoCompleted}
            // onRemove={removeTodo}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No todos yet. Add a new one above.
        </p>
      )}
    </>
  );
}
