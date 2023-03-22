import React from "react";
import { Container, AddTask, TaskList } from "components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "store";

import "scss/main.scss";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>ToDo List App</h1>
        <AddTask />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
