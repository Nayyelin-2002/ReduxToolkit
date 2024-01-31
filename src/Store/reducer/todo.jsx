import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchtodosdata = createAsyncThunk("fetchtodosdata", async () => {
  const response = await fetch("https://jsonplaceholder.typicde.com/todos");
  const data = response.json();
  return data;
});

const initialTodostate = {
  isLoading: false,
  data: [],
  isError: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodostate,
  extraReducers: (builder) => {
    builder.addCase(fetchtodosdata.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchtodosdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchtodosdata.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default todoSlice;
