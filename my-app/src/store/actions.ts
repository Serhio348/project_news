import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { newsPostActions } from "./newsPost/newsPostSlice";
import { blogsPostsActions } from "./blogsPosts/blogsPostsSlice";
import { blogsPostActions } from "./blogsPost/blogsPostSlice";
import { authActions } from "./auth/authSlice";

const actions = {
    ...newsPostsActions,
    ...newsPostActions,
    ...blogsPostsActions,
    ...blogsPostActions,
    ...authActions
}
export default actions;