import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTodo } from "../actions/todoActions";
import TodoList from "./TodoList";
import 'scss/App.scss';
import 'scss/Form.scss';
import 'scss/TodoList.scss';
import 'scss/TodoCard.scss';



const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state);

  const handleAddTodo = () => {
    dispatch(addTodo("Sample Todo"));
  };

  return (
    <div>
      <h1>TODO App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
