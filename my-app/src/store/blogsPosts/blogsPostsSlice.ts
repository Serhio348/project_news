import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsGrade } from "../../enums/NewsGrade";
import Storage from "../../helpers/Storage";
import NewsType from "../../types/NewsType"
import { fetchAllBlogsPosts, fetchBlogsPosts } from "./blogsPostsThunks";

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
    marks: number[],
}
export const initialState: StoreType = {
    data: [],
    loading: false,
    limit: 10,
    count: 0,
    grades: Storage.get("grades", {}),
    marks: Storage.get("marks", []),
}
const blogsPostsSlice = createSlice({
    name: "blogsPosts",
    initialState,
    reducers: {
        likeBlogs: (state, { payload: newsId }: PayloadAction<number>) => {
            if (state.grades[newsId] === NewsGrade.LIKE) {
                delete state.grades[newsId]
            } else {
                state.grades[newsId] = NewsGrade.LIKE
            }
            Storage.set("grades", state.grades)
        },
        dislikeBlogs: (state, { payload: newsId }: PayloadAction<number>) => {
            if (state.grades[newsId] === NewsGrade.DISLIKE) {
                delete state.grades[newsId]
            } else {
                state.grades[newsId] = NewsGrade.DISLIKE
            }
            Storage.set("grades", state.grades)
        },
        markBlogs: (state, { payload: newsId }: PayloadAction<number>) => {

            if (state.marks.includes(newsId)) {
                state.marks = state.marks.filter(id => id !== newsId);
            } else {
                state.marks.push(newsId);
            }
            Storage.set("marks", state.marks)
        },
    },
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
        builder.addCase(fetchAllBlogsPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });
        builder.addCase(fetchAllBlogsPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(fetchAllBlogsPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const blogsPostsReducer = blogsPostsSlice.reducer;
export const blogsPostsActions = {
    ...blogsPostsSlice.actions,
    fetchBlogsPosts,
    fetchAllBlogsPosts,
};