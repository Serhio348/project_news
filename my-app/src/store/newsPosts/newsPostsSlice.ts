import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsGrade } from "../../enums/NewsGrade";
import Storage from "../../helpers/Storage";
import NewsType from "../../types/NewsType"
import { fetchAllPosts, fetchPosts } from "./newsPostsThunks";

type GradesType = {
    [prop: number]: NewsGrade;
};

type StoreType = {
    data: NewsType[],
    loading: boolean,
    error?: string,
    count: number,
    grades: GradesType,
    marks: number[],
}
export const initialState: StoreType = {
    data: [],
    loading: false,
    count: 0,
    grades: Storage.get("grades", {}),
    marks: Storage.get("marks", []),
}
const newsPostsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        fetchAllPosts: () => {
        },
        likeNews: (state, { payload: newsId }: PayloadAction<number>) => {
            if (state.grades[newsId] === NewsGrade.LIKE) {
                delete state.grades[newsId]
            } else {
                state.grades[newsId] = NewsGrade.LIKE
            }
            Storage.set("grades", state.grades)
        },
        dislikeNews: (state, { payload: newsId }: PayloadAction<number>) => {
            if (state.grades[newsId] === NewsGrade.DISLIKE) {
                delete state.grades[newsId]
            } else {
                state.grades[newsId] = NewsGrade.DISLIKE
            }
            Storage.set("grades", state.grades)
        },
        markNews: (state, { payload: newsId }: PayloadAction<number>) => {

            if (state.marks.includes(newsId)) {
                state.marks = state.marks.filter(id => id !== newsId);
            } else {
                state.marks.push(newsId);
            }
            Storage.set("marks", state.marks)
        },
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
        builder.addCase(fetchAllPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
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
    fetchAllPosts,
};