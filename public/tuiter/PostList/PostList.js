import PostListItem from "./PostItem.js";
import post_data from "./post_data.js"
const PostList = () => {
    return (`
           <ul style="list-style-type: none" className="list-group">
    <li>${PostListItem(post_data[0])}</li>
    <li>${PostListItem(post_data[1])}</li>
</ul>
`); }

const main = $("#main")
main.html(PostList)

export default PostList;