import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { newsPostActions } from "./newsPost/newsPostSlice";
import { blogsPostsActions } from "./blogsPosts/blogsPostsSlice";
import { blogsPostActions } from "./blogsPost/blogsPostSlice";
import { userActions } from "./auth/userSlice";


const actions = {
    ...newsPostsActions,
    ...newsPostActions,
    ...blogsPostsActions,
    ...blogsPostActions,
    ...userActions,
}
export default actions;