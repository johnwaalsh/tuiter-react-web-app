import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const profile = useSelector(
        (state) => state.profile);
    return(
        <div>
            <div className="d-flex">
                <i className="bi bi-arrow-left me-5"></i>
                <div className="d-flex flex-column">
                    <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
                    <span>7,456 Tuits</span>
                </div>
            </div>
            <img className="col-12" src={`/images/${profile.bannerPicture}`} alt="banner" style={{height: '220px'}}/>
            <div>
                <img className="rounded-circle col-3 ms-3" src={`/images/${profile.profilePicture}`} alt="banner" style={{position: 'relative', top: '-80px'}}/>
                <Link to="/tuiter/edit-profile">
                    <button className="float-end mt-2 rounded-pill p-2 bg-white"><b>Edit Profile</b></button>
                </Link>
            </div>
            <div style={{position: 'relative', top: '-60px'}}>
                <div className="" >
                    <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
                    <span className="text-secondary">{profile.handle}</span>
                </div>
                <div className="mt-3">
                    <span>{profile.bio}</span>
                </div>
            </div>
            <div className="d-flex text-secondary justify-content-between" style={{position: 'relative', top: '-50px'}}>
                <div>
                    <i className="bi bi-geo-alt"></i>
                    <span> {profile.location}</span>
                </div>
                <div>
                    <i className="bi bi-balloon"></i>
                    <span> Born {profile.dateOfBirth}</span>
                </div>
                <div>
                    <i className="bi bi-calendar3"></i>
                    <span> Joined {profile.dateJoined}</span>
                </div>
                <div>
                </div>
                <div>
                    <i className="bi bi-cursor-fill"></i>
                    <span> {profile.website}</span>
                </div>
            </div>
            <div style={{position: 'relative', top: '-40px'}}>
                <span className="me-4"><b>{profile.followingCount}</b> Following</span>
                <span><b>{profile.followersCount}</b> Followers</span>
            </div>

        </div>
    );
};
export default ProfileComponent;