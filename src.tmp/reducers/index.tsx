import { combineReducers } from "redux";
import todosSlice from './todosSlice';

// Import and combine your reducers here
const rootReducer = combineReducers({
  // Add your reducers here
  todosSlice
});

export default rootReducer;
