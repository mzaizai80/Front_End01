import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deadline: Date;
}

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    // Add more actions as needed
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// // Define the initial state for your slice
// const initialState = {
//   someValue: 0, // Replace with your initial state data
// };

// // Create a slice
// const someSlice = createSlice({
//   name: "someSlice",
//   initialState,
//   reducers: {
//     // Define your reducer actions here
//   },
// });

// // Export the reducer and actions
// export const {
//   /* your actions here */
// } = someSlice.actions;
// export default someSlice.reducer;
