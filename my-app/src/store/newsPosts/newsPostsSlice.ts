import { createSlice } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"
import { fetchPosts } from "./newsPostsThunks";


type StoreType = {
    data: NewsType[],
    loading: boolean,
    error?: string,

}

export const initialState: StoreType = {
    data: [],
    loading: false,

}
const newsPostsSlice = createSlice({
    name: "newsPosts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    }
});

export const newsPostsReducer = newsPostsSlice.reducer;
export const newsPostsActions = {
    ...newsPostsSlice.actions,
    fetchPosts
};