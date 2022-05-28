import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { newsPostActions } from "./newsPost/newsPostSlice";

const actions = {
    ...newsPostsActions,
    ...newsPostActions,

}
export default actions;