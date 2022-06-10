import { newsPostsReducer } from "./newsPosts/newsPostsSlice";
import { newsPostReducer } from "./newsPost/newsPostSlice";
import { blogsPostsReducer } from "./blogsPosts/blogsPostsSlice";
import { blogsPostReducer } from "./blogsPost/blogsPostSlice";

const reducer = {
    newsPosts: newsPostsReducer,
    newsPost: newsPostReducer,
    blogsPosts: blogsPostsReducer,
    blogsPost: blogsPostReducer
}
export default reducer;
