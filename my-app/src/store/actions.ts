
import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { fetchPost } from "./newsPost/actionCreators";
import { newsPostActions } from "./newsPost/newsPostSlice";

const actions = {
    ...newsPostsActions,
    ...newsPostActions,
    fetchPost,
}

export default actions;