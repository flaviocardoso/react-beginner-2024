import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import { TODO } from "./types/todo";
import AddTodoItem from "./components/AddTodoItem";

function App() {
  const [todos, setTodos] = useState<TODO[]>(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((anteriores) => anteriores.map((todo) => (
      todo.id === id ? {...todo, completed} : todo
    )));
  }
  function addTodo(title: string) {
    setTodos((anteriores) => [
      { 
        id: anteriores[anteriores.length - 1].id + 1, 
        title, 
        completed: false 
      },
      ...anteriores, 
    ]);
  }
  function removeTodo(id: number) {
    setTodos((anteriores) => [ ...anteriores.filter((item) => item.id !== id)]);
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoItem onSubmit={addTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
              onRemove={removeTodo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
