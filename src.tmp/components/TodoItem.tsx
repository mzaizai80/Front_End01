// src/components/TodoItem.tsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../reducers/todosSlice";
import { Todo } from './models/Todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState<string>("");

  // Function to calculate and update the countdown
  const updateCountdown = () => {
    const now = new Date();
    const deadline = new Date(todo.deadline);
    const timeRemaining = deadline.getTime() - now.getTime();

    if (timeRemaining <= 0) {
      setCountdown("Expired");
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  };

  // Update countdown when the component mounts
  useEffect(() => {
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <span>Deadline: {todo.deadline.toLocaleString()}</span>
      <span>Countdown: {countdown}</span>
    </div>
  );
};

export default TodoItem;
