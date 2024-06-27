import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk("fetchComments", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isError = true;
      console.log("error", action.payload);
    });
  },
});

export default commentSlice.reducer;
