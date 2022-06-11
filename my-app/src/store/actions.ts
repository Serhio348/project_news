import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { newsPostActions } from "./newsPost/newsPostSlice";
import { blogsPostsActions } from "./blogsPosts/blogsPostsSlice";
import { blogsPostActions } from "./blogsPost/blogsPostSlice";


const actions = {
    ...newsPostsActions,
    ...newsPostActions,
    ...blogsPostsActions,
    ...blogsPostActions,
}
export default actions;