import { createSlice } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"
import { fetchblogsPost } from "./blogsPostThunks";



type StoreTypes = {
    data?: NewsType,
    loading: boolean,
    error?: string,

}
export const initialState: StoreTypes = {
    data: undefined,
    loading: false,
}
const blogsPostSlice = createSlice({
    name: "blogsPost",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchblogsPost.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = undefined;
        });
        builder.addCase(fetchblogsPost.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchblogsPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    }
});

export const blogsPostReducer = blogsPostSlice.reducer;
export const blogsPostActions = {
    ...blogsPostSlice.actions,
    fetchblogsPost
};