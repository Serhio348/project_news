import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import NewsType from "../../types/NewsType"


type StoreType = {
    data: NewsType[];
    loading: boolean,
    error: boolean,

}

export const initialState: StoreType = {
    data: [],
    loading: false,
    error: false,

}

const newsPostSlice = createSlice({
    name: "newsPosts",
    initialState,
    reducers: {
        setFetchNewsLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setFetchNewsError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload
        },
        setFetchNewsData: (state, action: PayloadAction<NewsType[]>) => {
            state.data = action.payload
        },

    }
});

export const newsReducer = newsPostSlice.reducer;
export const newsActions = newsPostSlice.actions;