// src/actions/todoActions.ts
export const addTodo = (text: string) => {
  return {
    type: "ADD_TODO",
    payload: { text },
  };
};
