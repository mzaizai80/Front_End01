import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const myValue = useSelector(
    (state: RootState) => state.someReducer.someValue
  );

  // Use dispatch and myValue here

  return <div>{/* Your component content */}</div>;
};

export default MyComponent;
