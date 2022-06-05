import NewsType from "../../types/NewsType"
import axios from "axios";
import PostsFilterType from "../../component/newsPosts/PostsFilterTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spaceflightnewsapi.net/v3/articles";

type FetchPostsType = {
    data: NewsType[],
    count: number,
}

export const fetchPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
    "newsPosts",
    async ({ page, limit }, thunkApi) => {
        const start = limit * (page - 1);
        let url = `${URL}?_limit=${limit}&_start=${start}`;
        // if (newsSite) {
        //     url += `&_newsSite=${newsSite}`;
        // }
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