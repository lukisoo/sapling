import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

// Navbar Component
const Navbar = () => {
    return (
        <nav>
            <div>
                <img className="navbar-logo" src="logo.png" alt="grassly logo" />
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                <NavLink to="/garden" activeClassName="active">Garden</NavLink>
                <NavLink to="/friends" activeClassName="active">Friends</NavLink>
            </div>

            <div>
                <img src="profile.jpg" alt="User profile" />
                <span>200</span>
            </div>
        </nav>
    );
};

export default Navbar;