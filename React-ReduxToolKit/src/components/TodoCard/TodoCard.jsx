import { useDispatch } from "react-redux";
import { removeTodo , toggleStatus  , updataTodo} from "../../features/todo/todoSlice";
import { useState } from "react";
import "./style.css"


function TodoCard(props) {

  const {todo} = props;
  
  const [editingId , setEditingId] = useState(null);
  const [editText , setEditText ] = useState("");
  
  const dispatch = useDispatch();

  function handleEdit(){
    dispatch(updataTodo({id : editingId , text: editText}));
    setEditingId(null);
    setEditText("");
  }

  function handleDiscart(){
    setEditText("");
    setEditingId(null);
  }
   return(
  <div className="todo-card" key={todo.id}>
    {editingId === todo.id ? (
      <div className="edit-block">
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <div className="edit-actions">
          <button className="discard-btn" onClick={handleDiscart}>
            Discard
          </button>
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        </div>
      </div>
    ) : (
      <>
        <span className="todo-text">{todo.text}</span>
        <div>
          <button
            className="edit-btn"
            onClick={() => {
              setEditingId(todo.id);
              setEditText(todo.text);
            }}
          >
            Edit
          </button>
          <button
            className={
              todo.status === "pending" ? "toggle-pending" : "toggle-complete"
            }
            onClick={() => {
              dispatch(toggleStatus(todo.id));
            }}
          >
            {todo.status === "pending" ? "Pending" : "Complete"}
          </button>
          <button
            className="delete-btn"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ✕
          </button>
        </div>
      </>
    )}
  </div>);
}

export default TodoCard;
