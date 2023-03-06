import React from "react";
import homePostsArray from './home-posts.json';
import HomePostItem
    from "./home-post-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                homePostsArray.map(post =>
                    <HomePostItem
                        post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;