import { useEffect, useState } from "react";
import { TODO } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState<TODO[]>(() => {
    const savedTodos: TODO[] = JSON.parse(
      localStorage.getItem("todos") ?? "[]"
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((anteriores) =>
      anteriores.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  function removeTodo(id: number) {
    setTodos((anteriores) => [...anteriores.filter((item) => item.id !== id)]);
  }
  function addTodo(title: string) {
    const id = Date.now();
    setTodos((anteriores) => [
      {
        id,
        title,
        completed: false,
      },
      ...anteriores,
    ]);
  }

  function removeAllCompletedTodos() {
    setTodos((anteriores) => [...anteriores.filter((item) => !item.completed)]);
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    removeTodo,
    removeAllCompletedTodos
  }
}