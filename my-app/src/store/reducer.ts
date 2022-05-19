
import { combineReducers } from "@reduxjs/toolkit";
import { newsPostReducer } from "../store/newsPost/reducer";
import { newsReducer } from "./newsPosts/newsPostsSlice";

export default combineReducers({
    newsPost: newsPostReducer,
    newsPosts: newsReducer,
});
