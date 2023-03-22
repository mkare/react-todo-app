import type {} from "redux-thunk/extend-redux";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TodosState extends Array<Todo> {}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://6419173375be53f451ec85c6.mockapi.io/todo"
  );
  const data = await response.json();
  return data;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodo",
  async (content: string) => {
    const response = await fetch(
      "https://6419173375be53f451ec85c6.mockapi.io/todo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, completed: false }),
      }
    );
    const data = await response.json();
    return data;
  }
);

export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo) => {
    await fetch(`https://6419173375be53f451ec85c6.mockapi.io/todo/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    return todo;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await fetch(`https://6419173375be53f451ec85c6.mockapi.io/todo/${id}`, {
      method: "DELETE",
    });
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
