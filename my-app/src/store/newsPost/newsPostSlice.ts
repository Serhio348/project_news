import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"


type StoreTypes = {
    data?: NewsType,
    loading: boolean,
    error: boolean,

}

export const initialState: StoreTypes = {
    data: undefined,
    loading: false,
    error: false,
}
const newsPostSlice = createSlice({
    name: "newsPost",
    initialState,
    reducers: {
        setFetchNewsPostLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setFetchNewsPostError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload
        },
        setFetchNewsPostData: (state, action: PayloadAction<NewsType | undefined>) => {
            state.data = action.payload
        },

    }
});

export const newsPostReducer = newsPostSlice.reducer;
export const newsPostActions = newsPostSlice.actions;