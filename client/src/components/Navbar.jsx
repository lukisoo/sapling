import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

import NavbarProfile from "../assets/navbar-profile.png";
import Settings from "../assets/settings.png";

import { currentCoinsState } from "../../atoms/currentCoinsState";

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";




// Navbar Component
const Navbar = () => {
    const [currentCoins, setCurrentCoins] =
      useRecoilState(currentCoinsState);
    return (
        <nav>
            <div>
                <img className="navbar-logo" src="logo.png" alt="grassly logo" />
                <NavLink exact to="/" className="navbar-item" activeClassName="active">Home</NavLink>
                <NavLink to="/profile" className="navbar-item" activeClassName="active">Profile</NavLink>
                <NavLink to="/garden" className="navbar-item" activeClassName="active">Garden</NavLink>
                <NavLink to="/friends" className="navbar-item" activeClassName="active">Friends</NavLink>
            </div>

            <div>
                <h3>coins: {currentCoins}</h3>
                <NavLink to="/profile" className="navbar-item" activeClassName="active"><img className="navbar-profile" src={NavbarProfile} alt="User profile" /></NavLink>
                <img className="settings" src={Settings} alt="Settings" />

            </div>
        </nav>
    );
};

export default Navbar;