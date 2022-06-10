import { createSlice } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"
import { fetchBlogsPosts } from "./blogsPostsThunks";

type StoreType = {
    data: NewsType[],
    loading: boolean,
    error?: string,
    limit: number,
    count: number,
}
export const initialState: StoreType = {
    data: [],
    loading: false,
    limit: 10,
    count: 0,
}
const blogsPostsSlice = createSlice({
    name: "blogsPosts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBlogsPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchBlogsPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchBlogsPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const blogsPostsReducer = blogsPostsSlice.reducer;
export const blogsPostsActions = {
    ...blogsPostsSlice.actions,
    fetchBlogsPosts
};