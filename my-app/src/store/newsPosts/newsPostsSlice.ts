import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsGrade } from "../../enums/NewsGrade";
import NewsType from "../../types/NewsType"
import { fetchPosts } from "./newsPostsThunks";

type GradesType = {
    [prop: number]: NewsGrade;
};

type StoreType = {
    data: NewsType[],
    loading: boolean,
    error?: string,
    limit: number,
    count: number,
    grades: GradesType,
}
export const initialState: StoreType = {
    data: [],
    loading: false,
    limit: 10,
    count: 0,
    grades: {},
}
const newsPostsSlice = createSlice({
    name: "newsPosts",
    initialState,
    reducers: {
        likeNews: (state, { payload }: PayloadAction<number>) => {
            if (state.grades[payload] === NewsGrade.LIKE) {
                delete state.grades[payload]
            } else {
                state.grades[payload] = NewsGrade.LIKE
            }
        },
        dislikeNews: (state, { payload }: PayloadAction<number>) => {
            if (state.grades[payload] === NewsGrade.DISLAKE) {
                delete state.grades[payload]
            } else {
                state.grades[payload] = NewsGrade.DISLAKE
            }
        }
    },
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
            state.count = payload.count;
        });
    }
});

export const newsPostsReducer = newsPostsSlice.reducer;
export const newsPostsActions = {
    ...newsPostsSlice.actions,
    fetchPosts,
};