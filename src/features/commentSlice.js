import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BLOG_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/blog/`;
const ARTICLE_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/article/`;

const initialState = {
  status: "",
  error: "",
  comments: [],
};

export const getComments = createAsyncThunk(
  "comments/get-all",
  async (articleId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        ARTICLE_ENDPOINT + `${articleId}/comments`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

//

export const addComments = createAsyncThunk(
  "comments/add-comments",
  async (values, { rejectWithValue }) => {
    try {
      const { token, text, articleId } = values;
      const response = await axios.post(
        ARTICLE_ENDPOINT + `${articleId}/comments`,
        {
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments.push(action.payload);
      })
      .addCase(addComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
