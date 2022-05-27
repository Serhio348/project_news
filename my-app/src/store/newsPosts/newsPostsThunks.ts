import NewsType from "../../types/NewsType"
import axios from "axios";
import PostsFilterType from "../../component/newsPosts/PostsFilterTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spaceflightnewsapi.net/v3/articles";


type FetchPostsType = {
    data: NewsType[],
}

export const fetchPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
    "newsPosts",
    async ({ limit }, thunkApi) => {

        // const offset = limit * (page - 1);
        let url = `${URL}?_limit=${limit}`;
        // if (newsSite) {
        //     url += `&_newsSite=${newsSite}`;
        // }
        try {
            const response = await axios.get(url);
            console.log(response);
            return {
                data: response.data as NewsType[],
            }
        } catch {
            return thunkApi.rejectWithValue("Server error!!!!!")
        }

    }
)