import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo Slice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        status : action.payload.status,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleStatus : (state ,action)=>{
      const todo = state.todos.find( todo=>todo.id === action.payload);
      if(todo){
        todo.status = todo.status === "pending" ? "complete" : "pending";
      }
    },
    updataTodo:(state , action)=>{
      const todo = state.todos.find( todo=>todo.id === action.payload.id);
      if(todo){
        todo.text = action.payload.text;
      }
    }
  },
});

export const { addTodo, removeTodo , toggleStatus , updataTodo } = todoSlice.actions;

export default todoSlice.reducer;
