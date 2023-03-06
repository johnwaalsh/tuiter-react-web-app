import React from "react";
const HomePostItem = (
    {
        post = {
            "name": "Elon Musk",
            "userName": "elonmusk",
            "time": "23h",
            "profileImage": "/images/elon_profile.jpg",
            "comment": "Amazing show about the @Inspiration4x mission!",
            "postImage": "../../images/spacesuit.jpg",
            "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "postDesc" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "link": "netflix.com",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K",
            "retweeted_by": "",
            "retweeted_name": "SpaceX",
            "retweeted_userName": "SpaceX",
            "retweeted_time": "16h",
            "retweeted_comment": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <>{post.retweeted_by && <span class="text-secondary ms-5"><i className="bi bi-repeat"></i> <b> {post.retweeted_by} Retweeted</b></span>}</>
            <div class="row mb-3 p-2">
                <div class="col-2">
                    <img class="rounded-circle col-10" src={post.profileImage}/>
                </div>
                <div class="col-10">
                    <div class="float-start">
                        <span class="text-black"><b>{post.name}</b> <i className="bi bi-patch-check-fill text-info"></i></span>
                        <i class="fas fa-solid fa-check-circle text-black"></i>
                        <span> @{post.userName} • {post.time}</span>
                    </div><br/>
                    <div>
                        <span>{post.comment}</span>
                    </div>
                    <>{post.postImage && <div class="border rounded-3 mt-2 col-12 d-flex flex-column">
                        <img class="border rounded-3" src={post.postImage}/>
                    </div>}</>
                    <>{post.retweeted_name && <div class="border rounded-3 mt-2 col-12 p-2">
                        <div>
                            <img className="float-start rounded-circle" height={24} src={post.retweeted_profileImage}/>
                            <div>
                                <span className="ms-1 text-black"><b>{post.retweeted_name}</b> <i
                                    className="bi bi-patch-check-fill text-info"></i></span>
                                <i className="fas fa-solid fa-check-circle text-black"></i>
                                <span> @{post.retweeted_userName} • {post.retweeted_time}</span>
                            </div>
                        </div>
                        {post.retweeted_comment}
                    </div>}</>
                    <div class="d-flex justify-content-between me-5 mt-3 mb-3">
                        <div class="">
                            <i className="bi bi-chat"></i>
                            <span> {post.comments}</span>
                        </div>
                        <div>
                            <i className="bi bi-repeat"></i>
                            <span> {post.retweets}</span>
                        </div>
                        <div>
                            <i className="bi bi-heart"></i>
                            <span> {post.likes}</span>
                        </div>
                        <div>
                            <i className="bi bi-upload"></i>
                        </div>
                    </div>
                    <>{post.show_this_thread && <span class="text-info">Show this thread</span>}</>
                </div>
            </div>
        </li>
    );
};
export default HomePostItem;