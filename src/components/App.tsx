import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTodo } from "../actions/todoActions";
import TodoList from "./TodoList"; // Assuming this is the correct import for your TodoList component
import CardList from "./CardList"; // Assuming this is the correct import for your CardList component
// import "scss/App.scss";
// import "scss/Form.scss";
// import "scss/TodoList.scss";
// import "scss/TodoCard.scss";
import { Todo } from './models/Todo';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos); // Assuming todos is an array in your state

  const handleAddTodo = () => {
    dispatch(addTodo("Sample Todo"));
  };

  return (
    <div>
      <h1>TODO App</h1>
      {/* Assuming you want to display the TodoList and CardList components */}
      {/* 
      <TodoList />
      */}
      <CardList /> {/*You might need to pass props to CardList as needed */}
    </div>
  );
};

export default App;
