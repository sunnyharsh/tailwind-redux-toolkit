import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../Services/ApiCall";

export const fetchTodos = createAsyncThunk<any, void, any>(
  "fetchTodos",
  async () => {
    return request({
      method: "get",
      url: "/todos",
    }).then((resp) => {
      return resp;
    });
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("error", action);
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
