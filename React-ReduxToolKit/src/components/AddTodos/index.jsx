import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../features/todo/todoSlice";
import "./style.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo( {text : input , status:"pending" }));
    setInput("");
  }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a todo..."
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
