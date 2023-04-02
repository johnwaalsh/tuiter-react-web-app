import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
    {
        post = {
            "_id": 100,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex_logo.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log(id)
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item border-bottom-0">
            <div className="row p-2">
                <div className="col-2">
                    <img className="rounded-circle col-10" alt="profile" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="float-start">
                        <span className="text-black"><b>{post.username}</b> <i
                            className="bi bi-patch-check-fill text-info"></i></span>
                        <i className="fas fa-solid fa-check-circle text-black"></i>
                        <span> {post.handle} • {post.time}</span>
                    </div>
                    <button onClick={() => deleteTuitHandler(post._id)} className="float-end border-0 bg-white">
                        <i className="bi bi-x-lg float-end"></i>
                    </button>
                    <br/>
                    <div>
                        <span>{post.tuit}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;