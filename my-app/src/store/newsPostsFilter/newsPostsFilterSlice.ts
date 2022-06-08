import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import NewsType from "../../types/NewsType"

export type StoreFilterType = {
    limit: number,
    page: number,
    count: number,
    dataFilter: NewsType[]

}
const initialState: StoreFilterType = {
    page: 1,
    limit: 10,
    count: 1,
    dataFilter: [],
}

const newsFilterSlice = createSlice({
    name: "newsFilter",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
})
export const newsFilterReducer = newsFilterSlice.reducer;
export const newsFilterActions = {
    ...newsFilterSlice.actions,
} 