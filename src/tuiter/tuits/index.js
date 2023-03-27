import React from "react";
import TuitItem
    from "./tuit-item";
import TuitStats from "./tuit-stats"
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(
        (state) => state.tuits);
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <div>
                        <TuitItem
                            post={tuit}/>
                        <TuitStats
                            post={tuit} key={tuit._id}/>
                    </div>
                    )
            }
        </ul>
    );
};
export default TuitsList;