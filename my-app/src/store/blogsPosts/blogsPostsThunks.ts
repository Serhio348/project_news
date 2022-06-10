import NewsType from "../../types/NewsType"
import axios from "axios";
import PostsFilterType from "../../component/newsPosts/PostsFilterTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spaceflightnewsapi.net/v3/blogs";

type FetchPostsType = {
    data: NewsType[],
    count: number,
}

export const fetchBlogsPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
    "blogsPosts",
    async ({ page, limit, title, sorting }, thunkApi) => {
        const start = limit * (page - 1);
        let url = `${URL}?_limit=${limit}`;
        if (title) {
            url = `https://api.spaceflightnewsapi.net/v3/blogs?title_contains=${title}`;
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