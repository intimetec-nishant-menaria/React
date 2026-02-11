import "./App.css";
import AddTodo from "./components/AddTodos/index.jsx";
import DisplayTodos from "./components/DisplayTodo/DisplayTodos.jsx";

function App() {
  return (
    <div>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
