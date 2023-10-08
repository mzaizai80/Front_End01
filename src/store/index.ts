// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer"; // Import your todoReducer

const store = configureStore({
  reducer: {
    todos: todoReducer, // Assuming 'todos' is the name of your reducer slice
    // Other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todoReducer";

// const store = configureStore(
//     {
//         reducer: {
//             todos: todoReducer,
//         }
//     });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
