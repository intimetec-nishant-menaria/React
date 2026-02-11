import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import TodoCard from "../todoCard/TodoCard";


function DisplayTodos() {
  
  const { status } = useParams();

  const todos = useSelector((state) => state.todos)
  .filter(todo=>{
    if(status==="all"){
      return true;
    }
    return todo.status === status
  });

  return (
    <div className="display-container">
      <h2 className="display-title">Your Todos</h2>
      {todos.length === 0 && <p className="empty-message">No todos yet...</p>}
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard todo={todo} key={todo.id}/>
        ))}
      </div>
    </div>
  );
}

export default DisplayTodos;
