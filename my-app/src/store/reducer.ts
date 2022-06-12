import { newsPostsReducer } from "./newsPosts/newsPostsSlice";
import { newsPostReducer } from "./newsPost/newsPostSlice";
import { blogsPostsReducer } from "./blogsPosts/blogsPostsSlice";
import { blogsPostReducer } from "./blogsPost/blogsPostSlice";
import { userReducer } from "./auth/userSlice";

const reducer = {
    newsPosts: newsPostsReducer,
    newsPost: newsPostReducer,
    blogsPosts: blogsPostsReducer,
    blogsPost: blogsPostReducer,
    user: userReducer
}
export default reducer;
