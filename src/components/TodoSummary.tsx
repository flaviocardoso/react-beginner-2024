import { useTodos } from "../lib/useTodo";

export default function TodoSummary() {
  const {todos,removeAllCompletedTodos} = useTodos()
  const completedTodos = [...todos].filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          className=" text-red-500 hover:underline text-sm font-medium"
          type="button"
          onClick={removeAllCompletedTodos}
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
