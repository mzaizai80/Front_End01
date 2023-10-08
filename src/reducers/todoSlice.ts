import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for your slice
const initialState = {
  someValue: 0, // Replace with your initial state data
};

// Create a slice
const someSlice = createSlice({
  name: "someSlice",
  initialState,
  reducers: {
    // Define your reducer actions here
  },
});

// Export the reducer and actions
export const {
  /* your actions here */
} = someSlice.actions;
export default someSlice.reducer;
