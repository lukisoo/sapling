import React from "react";
import "./GardenPage.css";
import RoadmapButton from "../assets/return-to-roadmap-button.png";
import BirdTree from "../assets/bird-tree.png";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
  import { useState } from "react";



import { currentIslandState } from "../../atoms/currentIslandState";

import { NavLink } from "react-router-dom";
// import Xx from "../assets/dirt.svg"

export default function GardenPage() {
    const [currentIslandDisplay, setCurrentIslandDisplay] =
    useRecoilState(currentIslandState);

    const [currentPlant, setCurrentPlant] = useState("")

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <NavLink exact to="/" activeClassName="active">
            <img className="roadmap-button" src={RoadmapButton} />
          </NavLink>
          <img onClick={() => {setCurrentIslandDisplay([BirdTree].concat(currentIslandState[1,23]))}} className="roadmap-button" src={RoadmapButton} />


          <h1>{currentIslandDisplay[0]}</h1>
          <div className="store-bg"></div>
        </div>

        <div className="right">
          <div className="island-container">
            {/* <img className="island" src={IslandBg} /> */}
            <div className="island-overlay">
              <div class="grid-container">
                <div id="1" className="grid-box placeholder">{currentIslandDisplay[0]}</div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={currentIslandDisplay[0]} />
                </div>
                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  <img className="grid-icon" src={""} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>

                <div id="1" className="grid-box placeholder"></div>

                <div id="1" className="grid-box valid"></div>
                <div id="1" className="grid-box valid"></div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>
                <div id="1" className="grid-box valid">
                  {" "}
                  <img className="grid-icon" src={""} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
              </div>
            </div>
          </div>

          <div className="info-bg"></div>
        </div>
      </div>
    </>
  );
}
