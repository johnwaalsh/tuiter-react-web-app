import React, {useState} from "react";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

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
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 386,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    let [likes, setLikes] = useState(post.likes);
    let [liked, setLiked] = useState(post.liked);
    let [dislikes, setDislikes] = useState(post.dislikes);
    let [disliked, setDisliked] = useState(post.disliked);
    const likeClickHandler = () => {
        let curr_likes = 0;
        const newLiked = !liked
        if (newLiked) {
            curr_likes = likes + 1;
        } else {
            curr_likes = likes - 1;
        }
        setLikes(curr_likes)
        setLiked(newLiked)
        dispatch(updateTuitThunk({
            ...post,
            likes: curr_likes,
            liked: newLiked
        }))
    }
    const dislikeClickHandler = () => {
        let curr_dislikes = 0;
        const newDisliked = !disliked
        if (newDisliked) {
            curr_dislikes = dislikes + 1;
        } else {
            curr_dislikes = dislikes - 1;
        }
        setDislikes(curr_dislikes)
        setDisliked(newDisliked)
        dispatch(updateTuitThunk({
            ...post,
            dislikes: curr_dislikes,
            disliked: newDisliked
        }))
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
                        <>{disliked && <div>
                            <button className="border-0 bg-white" onClick={dislikeClickHandler}><i className="bi bi-hand-thumbs-down-fill"></i></button>
                            <span> {dislikes}</span>
                        </div>}</>
                        <>{!disliked && <div>
                            <button className="border-0 bg-white" onClick={dislikeClickHandler}><i className="bi bi-hand-thumbs-down"></i></button>
                            <span> {dislikes}</span>
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