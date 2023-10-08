// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import {store} from './todoapp/store'
// import App from './App';
// // import AddTodoForm from './components/AddTodoForm';
// // import TodoList from './components/TodoList';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <Provider store={store}>
//     <div>
//       <h1>Task Note App</h1>
//       <App />
//     </div>
//   </Provider>
// );

//<TodoList />

// <React.StrictMode>
//   <App />
// </React.StrictMode>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
