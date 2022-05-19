import { PostActionTypes, PostActionType } from "./types";
import NewsType from "../../types/NewsType"
import axios from "axios";
import actions from "../actions";

const URL = "https://api.spaceflightnewsapi.net/v3/articles/15105";

export const fetchPost = (id?: string) => async (dispatch: any) => {
    dispatch(actions.setNewsLoading(true));
    dispatch(actions.setNewsError(false));
    dispatch(actions.setNewsPost(undefined));
    const url = `${URL}`
    try {
        const response = await axios.get(url)
        dispatch(actions.setNewsPost(response.data as NewsType))
    } catch {
        dispatch(actions.setNewsError(true));
    }
    dispatch(actions.setNewsLoading(false))

}

export const setNewsPost = (value?: NewsType): PostActionType => ({
    type: PostActionTypes.SET_DATA,
    payload: value
});

export const setNewsLoading = (value: boolean): PostActionType => ({
    type: PostActionTypes.SET_LOADING,
    payload: value
});
export const setNewsError = (value: boolean): PostActionType => ({
    type: PostActionTypes.SET_ERROR,
    payload: value
});