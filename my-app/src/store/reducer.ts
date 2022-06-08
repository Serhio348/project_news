import { newsPostsReducer } from "./newsPosts/newsPostsSlice";
import { newsPostReducer } from "./newsPost/newsPostSlice";

const reducer = {
    newsPosts: newsPostsReducer,
    newsPost: newsPostReducer,
}
export default reducer;
