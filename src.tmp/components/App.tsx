import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const myValue = useSelector((state: RootState) => state);

  // Function to add a new TODO
  const handleAddTodo = (newTodoText: string) => {
    // Dispatch the addTodo action to add a new TODO to the store
    dispatch(
      addTodo({
        id: Date.now(), // A simple way to generate a unique ID
        text: newTodoText,
        completed: false,
        deadline: new Date(), // You can set the deadline as needed
      })
    );
  };

  return (
    <div>
      <h1>TODO App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />{" "}
      {/* Pass the handler to AddTodoForm */}
      <TodoList todos={myValue.todosSlice} /> {/* Pass the TODOs to TodoList */}
    </div>
  );
};

export default App;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import TodoList from "./TodoList";
// import AddTodoForm from "./AddTodoForm";
// import { addTodo } from "../reducers/todosSlice"; // Import your action

// const App: React.FC = () => {
//   const dispatch = useDispatch();
//   const myValue = useSelector((state: RootState) => state);

//   // Function to add a new TODO
//   const handleAddTodo = (newTodoText: string) => {
//     // Dispatch the addTodo action to add a new TODO to the store
//     dispatch(
//       addTodo({
//         id: Date.now(), // A simple way to generate a unique ID
//         text: newTodoText,
//         completed: false,
//         deadline: new Date(), // You can set the deadline as needed
//       })
//     );
//   };

//   return (
//     <div>
//       <h1>TODO App</h1>
//       <AddTodoForm onAddTodo={handleAddTodo} />{" "}
//       {/* Pass the handler to AddTodoForm */}
//       <TodoList todos={myValue.todosSlice} /> {/* Pass the TODOs to TodoList */}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";

// const App: React.FC = () => {
//   const dispatch = useDispatch();
//   const myValue = useSelector(
//     (state: RootState) => state
//   );

//   // Use dispatch and myValue here

//   return <div>{/* Your component content */}</div>;
// };

// export default App;
