import React, {useState} from "react";
const TuitStats = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "images/spacex_logo.jpg",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    let [likes, setLikes] = useState(post.likes);
    let [liked, setLiked] = useState(post.liked);
    const likeClickHandler = () => {
        if (liked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLiked(!liked)
    }

    return(
        <li className="list-group-item border-top-0">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between me-5">
                        <div className="">
                            <i className="bi bi-chat"></i>
                            <span> {post.replies}</span>
                        </div>
                        <div>
                            <i className="bi bi-repeat"></i>
                            <span> {post.retuits}</span>
                        </div>
                        <>{liked && <div>
                            <button className="border-0 bg-white" onClick={likeClickHandler}><i className="bi bi-heart-fill text-danger"></i></button>
                            <span> {likes}</span>
                        </div>}</>
                        <>{!liked && <div>
                            <button className="border-0 bg-white" onClick={likeClickHandler}><i className="bi bi-heart"></i></button>
                            <span> {likes}</span>
                        </div>}</>
                        <div>
                            <i className="bi bi-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitStats;