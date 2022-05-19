import { PostActionTypes, PostActionType } from "./types";
import NewsType from "../../types/NewsType"

export const setNewsPost = (value: NewsType): PostActionType => ({
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