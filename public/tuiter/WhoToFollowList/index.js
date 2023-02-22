import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul className="list-group" style="list-style-type: none">
    <li>${WhoToFollowListItem(who[0])}</li>
    <li>${WhoToFollowListItem(who[1])}</li>
    <li>${WhoToFollowListItem(who[2])}</li>
    <li>${WhoToFollowListItem(who[3])}</li>
    <li>${WhoToFollowListItem(who[4])}</li>
</ul>
`); }

const main = $("#main")
main.html(WhoToFollowList)

export default WhoToFollowList;

