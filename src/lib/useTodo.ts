import { useRecoilState } from "recoil";
import todoList from "./atom";
import { TODO } from "../types/todo";

function setTodosLocalStorage (todos: TODO[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todoList);
  // atualiza no localStorage
  setTodosLocalStorage(todos);
  // adicona na lista
  const addTodo = (title: string) => {
    setTodos((prev) => {
      const list = [{ id: Date.now(), title, completed: false }, ...prev]
      return list;
    });
  };
  // toogle lista
  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prev) => {
      const list = prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
      return list;
    });
  };
  // remove um item da lista
  const removeTodo = (id: number) => {
    setTodos((prev) => {
      const list = [...prev.filter((item) => item.id !== id)];
      return list;
    });
  };
  // remove itens completos
  const removeAllCompletedTodos = () => {
    setTodos((prev) => {
      const list = [...prev.filter((item) => !item.completed)]
      return list;
    });
  };

  return {
    todos,
    addTodo,
    setTodoCompleted,
    removeTodo,
    removeAllCompletedTodos,
  };
};
