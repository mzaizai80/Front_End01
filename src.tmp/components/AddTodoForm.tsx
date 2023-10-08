// src/components/AddTodoForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todosSlice";

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text && deadline) {
      const newTodo: Todo = {
        id: Date.now(), // Replace with your preferred ID generation logic
        text,
        completed: false,
        deadline: new Date(deadline),
      };
      dispatch(addTodo(newTodo));
      setText("");
      setDeadline("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter TODO text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Select a deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default AddTodoForm;
