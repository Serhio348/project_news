import NewsType from "../../types/NewsType"
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spaceflightnewsapi.net/v3/blogs";

type FetchPostType = {
    data: NewsType
}
export const fetchblogsPost = createAsyncThunk<FetchPostType, string | undefined, { rejectValue: string }>(
    "blogsPost",
    async (id, thunkApi) => {
        const url = `${URL}/${id}`;
        try {
            const response = await axios.get(url);
            console.log(response);
            return {
                data: response.data as NewsType,
            }
        } catch {
            return thunkApi.rejectWithValue("Server error!!!!!")
        }
    })
