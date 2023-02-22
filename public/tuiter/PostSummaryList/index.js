import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"
const PostSummaryList = () => {
    return (`
           <ul style="list-style-type: none" className="list-group">
    <li>${PostSummaryItem(exploreItems[0])}</li>
    <li>${PostSummaryItem(exploreItems[1])}</li>
    <li>${PostSummaryItem(exploreItems[2])}</li>
    <li>${PostSummaryItem(exploreItems[3])}</li>
</ul>
`); }

const main = $("#main")
main.html(PostSummaryList)

export default PostSummaryList;