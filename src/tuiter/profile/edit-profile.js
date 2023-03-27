import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateName, updateBio, updateLocation, updateWebsite, updateBirthdate} from "../profile/profile-reducer";
const EditProfileComponent = () => {
    const dispatch = useDispatch();

    const profile = useSelector(
        (state) => state.profile);
    const fullName = `${profile.firstName} ${profile.lastName}`
    const birthdate_list = profile.dateOfBirth.split('/')
    const startBirthdate = `${birthdate_list[2]}-${birthdate_list[0]}-${birthdate_list[1]}`
    const [name, setName] = useState(fullName);
    const [bio, setBio] = useState(profile.bio);
    const [user_location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [birthdate, setBirthdate] = useState(startBirthdate)

    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        setBio(bioValue);
    }
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        setLocation(locationValue);
    }
    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        setWebsite(websiteValue);
    }
    const birthdateChangeHandler = (event) => {
        const birthdateValue = event.target.value;
        setBirthdate(birthdateValue);
    }

    const updateDetailsHandler = () => {
        dispatch(updateName(name));
        dispatch(updateBio(bio));
        dispatch(updateLocation(user_location));
        dispatch(updateWebsite(website));
        dispatch(updateBirthdate(birthdate));
    }
    return(
        <div>
            <div className="mb-3 row">
                <div className="col-2">
                    <Link className="" to="/tuiter/profile/">
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <h5 className="col-8"><b>Edit Profile</b></h5>
                <div className="col-1">
                    <Link to="/tuiter/profile/">
                        <button className="rounded-pill bg-black text-white p-1 border-0 ps-3 pe-3" onClick={updateDetailsHandler}><b>Save</b></button>
                    </Link>
                </div>
            </div>
            <div>
                <img className="col-12" src={`/images/${profile.bannerPicture}`} alt="banner" style={{height: '220px'}}/>
                <img className="rounded-circle col-3 ms-3" src={`/images/${profile.profilePicture}`} alt="banner" style={{position: 'relative', top: '-80px'}}/>
                <div style={{position: 'relative', top: '-60px'}}>
                    <div className="mt-3 mb-3">
                        <span className="text-secondary small">Name</span>
                        <input className="form-control" onChange={nameChangeHandler} value={name}></input>
                    </div>
                    <div className="mt-3 mb-3">
                        <span className="text-secondary small">Bio</span>
                        <input className="form-control" onChange={bioChangeHandler} value={bio}></input>
                    </div>
                    <div className="mt-3 mb-3">
                        <span className="text-secondary small">Location</span>
                        <input className="form-control" onChange={locationChangeHandler} value={user_location}></input>
                    </div>
                    <div className="mt-3 mb-3">
                        <span className="text-secondary small">Website</span>
                        <input className="form-control" onChange={websiteChangeHandler} value={website}></input>
                    </div>
                    <div className="mt-3 mb-3">
                        <span className="text-secondary small">Birth date</span>
                        <input className="form-control" type="date" onChange={birthdateChangeHandler} value={birthdate}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfileComponent;