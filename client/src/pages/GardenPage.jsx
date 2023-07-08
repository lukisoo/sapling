import React from "react";
import "./GardenPage.css";
import RoadmapButton from "../assets/return-to-roadmap-button.png";
import IslandBg from "../assets/island.png";
import { NavLink } from "react-router-dom";
// import Xx from "../assets/dirt.svg"

export default function GardenPage() {
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <NavLink exact to="/" activeClassName="active">
            <img className="roadmap-button" src={RoadmapButton} />
          </NavLink>
          <h1>fhsodifh</h1>
          <div className="store-bg"></div>
        </div>

        <div className="right">
          <div className="island-container">
            {/* <img className="island" src={IslandBg} /> */}
            <div className="island-overlay">
              <h2>test</h2>
              <h1>IDHFOSDIFHOSDIFH</h1>
            </div>
          </div>

          <div className="info-bg"></div>
        </div>
      </div>
    </>
  );
}
