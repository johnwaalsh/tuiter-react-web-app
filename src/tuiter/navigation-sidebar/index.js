import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="#"><i className="bi bi-twitter"></i><span className="d-none d-xl-inline"> Tuiter</span></a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i><span className="d-none d-xl-inline"> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i><span className="d-none d-xl-inline"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-laptop"></i><span className="d-none d-xl-inline"> Labs</span>
            </Link>
            <a href="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i><span className="d-none d-xl-inline"> Notifications</span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i><span className="d-none d-xl-inline"> Messages</span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i><span className="d-none d-xl-inline"> Bookmarks</span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-task"></i><span className="d-none d-xl-inline"> Lists</span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i><span className="d-none d-xl-inline"> Profile</span>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-circle-fill"></i><span className="d-none d-xl-inline"> More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;