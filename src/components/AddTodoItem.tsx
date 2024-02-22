import { useState } from "react";
import { useTodos } from "../lib/useTodo";

// interface AddTodoItemProps {
//   onSubmit: (title: string) => void
// }

// export default function AddTodoItem({ onSubmit }: AddTodoItemProps) {
  export default function AddTodoItem() {
    const {addTodo} = useTodos()
  const [input, setInput] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input 
      placeholder="What needs to be done?"
      className="rounded-s-md grow border  border-gray-400 p-2 focus:border-gray-800 focus:outline-none focus:ring-0"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button
      type="submit"
      className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}