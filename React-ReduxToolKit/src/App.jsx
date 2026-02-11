import { Outlet } from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodos/index.jsx";
import Navigaton from "./components/Navigation/Navigation.jsx";

function App() {
  return (
    <div>
      <AddTodo />
      <Navigaton/>
      <Outlet/>
    </div>
  );
}

export default App;
