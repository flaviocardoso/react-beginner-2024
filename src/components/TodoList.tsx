import { TODO } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: TODO[],
  setTodoCompleted: (id: number, completed: boolean) => void,
  removeTodo: (id: number) => void,
}

export default function TodoList({todos, setTodoCompleted, removeTodo}: TodoListProps) {
  const todosSorted = todos.sort((a, b) =>
    a.completed === b.completed ? b.id - a.id : a.completed ? 1 : -1
  );

  return (
    <>
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={setTodoCompleted}
          onRemove={removeTodo}
        />
      ))}
    </div>
    {todos.length === 0 && <p className="text-center text-sm text-gray-500">No todos yet. Add a new one above.</p>}
    </>
  );
}
