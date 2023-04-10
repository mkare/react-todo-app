import type {} from "redux-thunk/extend-redux";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import TodoApi from "utils/TodoApi";

interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TodosState extends Array<Todo> {}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const todos = await TodoApi.fetchTodos();
  return todos;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodo",
  async (content: string) => {
    const todo = await TodoApi.addTodo(content);
    return todo;
  }
);

export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo) => {
    const updatedTodo = await TodoApi.updateTodo(todo);
    return updatedTodo;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await TodoApi.deleteTodo(id);
    return id;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<TodosState>) => {
          return action.payload;
        }
      )
      .addCase(addTodoAsync.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      })
      .addCase(
        updateTodoAsync.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          const { id, content, isCompleted } = action.payload;
          const index = state.findIndex((todo) => todo.id === id);
          if (index !== -1) {
            state[index] = { id, content, isCompleted };
          }
        }
      )
      .addCase(
        deleteTodoAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          const index = state.findIndex((todo) => todo.id === action.payload);
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      );
  },
});

export default todosSlice.reducer;
