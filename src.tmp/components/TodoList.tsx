// src/components/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import TodoItem from "./TodoItem";
import {Todo} from "./models/Todo"

interface TodoListProps {
  todos: Todo[]; // Define the 'todos' prop with the Todo type
}

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
