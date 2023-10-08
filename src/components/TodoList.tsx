import React from "react";
import { Todo } from "./models/Todo"; // Import the Todo type

interface TodoListProps {
  todos: Todo[]; // Ensure that 'todos' is an array of Todo objects
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">
              Completed: {todo.completed ? "Yes" : "No"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

// import React from "react";
// import {Todo} from "./models/Todo"
// interface TodoListProps {
//   todos: Todo[];
// }
// const TodoList: React.FC<TodoListProps> = ({ todos }) => {
//   return (
//     <div>
//       <h2>Todo List</h2>
//       {todos.map((todo) => (
//         <div key={todo.id} className="card">
//           <div className="card-body">
//             <h5 className="card-title">{todo.title}</h5>
//             <p className="card-text">Completed: {todo.completed ? "Yes" : "No"}</p>
//             <p className="card-text">{todo.expiredDateTime }</p>
//           </div>
//         </div>
//       ))}
//     </div>

//   )};
// export default TodoList;


// const TodoList: React.FC<TodoListProps> = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// };
