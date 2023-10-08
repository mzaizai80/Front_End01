interface Todo {
  text: string;
}

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload.text }];
    default:
      return state;
  }
};

export default todoReducer;
