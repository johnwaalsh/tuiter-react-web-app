import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9">
                    <div>{post.topic}</div>
                    <div className="fw-semibold">{post.userName} • {post.time}</div>
                    <div className="fw-semibold">{post.title}</div>
                </div>
                <div className="col-3">
                    <img className="float-end rounded-3 col-12" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;