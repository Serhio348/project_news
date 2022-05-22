
import { combineReducers } from "@reduxjs/toolkit";
import { newsPostsReducer } from "./newsPosts/newsPostsSlice";
import { newsPostReducer } from "./newsPost/newsPostSlice";


export default combineReducers({
    newsPosts: newsPostsReducer,
    newsPost: newsPostReducer,

});
