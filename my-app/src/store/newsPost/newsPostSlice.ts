import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"
import { fetchPost } from "./newsPostThanks";


type StoreTypes = {
    data?: NewsType,
    loading: boolean,
    error?: string,

}
export const initialState: StoreTypes = {
    data: undefined,
    loading: false,
}
const newsPostSlice = createSlice({
    name: "newsPost",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPost.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = undefined;
        });
        builder.addCase(fetchPost.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        });
    }
});

export const newsPostReducer = newsPostSlice.reducer;
export const newsPostActions = {
    ...newsPostSlice.actions,
    fetchPost
};