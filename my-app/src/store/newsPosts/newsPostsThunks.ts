import NewsType from "../../types/NewsType"
import axios from "axios";
import PostsFilterType from "../../component/newsPosts/PostsFilterTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spaceflightnewsapi.net/v3/articles/";

type FetchPostsType = {
    data: NewsType[],
    count: number,
}
export const fetchPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
    "news/fetchPosts",
    async ({ page, limit, title, sorting }, thunkApi) => {
        const start = limit * (page - 1);
        let url = `${URL}?_limit=${limit}`;
        if (title) {
            url = `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${title}`;
        }
        if (sorting) {
            url += `&_sort=${sorting}&_start=${start}`;
        }
        try {
            const response = await axios.get(url);
            return {
                data: response.data as NewsType[],
                count: response.data.count as number,
            }
        } catch {
            return thunkApi.rejectWithValue("Server error!!!!!")
        }
    }
)
export const fetchAllPosts = createAsyncThunk<FetchPostsType, undefined, { rejectValue: string }>(
    "news/fetchAllPosts",
    async (_, thunkApi) => {
        let url = `${URL}?_limit=${100}`;
        try {
            const response = await axios.get(url);
            return {
                data: response.data as NewsType[],
                count: response.data.count as number,
            }
        } catch {
            return thunkApi.rejectWithValue("Server error!!!!!")
        }
    }
)


