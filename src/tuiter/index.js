import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list"
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/edit-profile";
import whoReducer
    from "./reducers/who-reducer";
import currentTuits
    from "./tuits/tuits-reducer";
import profileData
    from "./profile/profile-reducer"
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: currentTuits, profile: profileData}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-4 m-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile"    element={<ProfileComponent/>}/>
                        <Route path="edit-profile"    element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path="/"    element={<PostSummaryList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                        <Route path="profile" element={<WhoToFollowList/>}/>
                        <Route path="edit-profile" element={<WhoToFollowList/>}/>
                    </Routes>

                </div>
            </div>
        </Provider>
    );
}

export default Tuiter