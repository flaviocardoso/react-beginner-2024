import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  return (
      <main className="py-10 h-screen space-y-5 overflow-auto">
        <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
          <AddTodoItem />
          <TodoList
            // todos={todos}
            // setTodoCompleted={setTodoCompleted}
            // removeTodo={removeTodo}
          />
        </div>
        <TodoSummary
          // todos={todos}
          // deleteAllCompleted={removeAllCompletedTodos}
        />
      </main>
  );
}

export default App;
