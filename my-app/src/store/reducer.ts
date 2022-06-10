import { newsPostsReducer } from "./newsPosts/newsPostsSlice";
import { newsPostReducer } from "./newsPost/newsPostSlice";
import { blogsPostsReducer } from "./blogsPosts/blogsPostsSlice";
import { blogsPostReducer } from "./blogsPost/blogsPostSlice";
import { authReducer } from "./auth/authSlice";

const reducer = {
    newsPosts: newsPostsReducer,
    newsPost: newsPostReducer,
    blogsPosts: blogsPostsReducer,
    blogsPost: blogsPostReducer,
    auth: authReducer
}
export default reducer;
