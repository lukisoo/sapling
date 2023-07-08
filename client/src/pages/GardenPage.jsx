import React from "react";
import "./GardenPage.css";

import RoadmapButton from "../assets/return-to-roadmap-button.png";
import BirdTree from "../assets/plants/bird-tree.png";
import FloweringTree from "../assets/plants/flowering-tree.png";

import BirdTreeListing from "../assets/shop-listings/bird-tree.png";
import FloweringTreeListing from "../assets/shop-listings/flowering-tree.png";

// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from "recoil";
import { useState } from "react";

import { currentIslandState } from "../../atoms/currentIslandState";

import { NavLink } from "react-router-dom";
// import Xx from "../assets/dirt.svg"

export default function GardenPage() {
  //   const [currentIslandDisplay, setCurrentIslandDisplay] =
  //     useRecoilState(currentIslandState);

  const [currentIslandDisplay, setCurrentIslandDisplay] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [currentPlant, setCurrentPlant] = useState("");

  const handlePurchase = (selectedPlant) => {
    //TODO CHECK MONEY IF POSSIBLE
    // Enable click to add

    // Plant successfully selected -> need to add to island
    setCurrentPlant(selectedPlant);
  };

  const handleIslandUpdate = (index) => {
    //TODO CHECK IF THERE IS A PLANT EXISTING ALREADY (DENY THEM)

    //Check if no plant selected (do nothing)
    if (currentPlant == "") {
    } else {
      console.log(currentIslandDisplay, currentPlant);
      console.log("HERE")
      console.log(currentIslandDisplay[(0, index)])
      console.log(currentPlant)
      console.log([currentPlant])
      console.log(currentIslandDisplay[(0, index)].concat([currentPlant]))


      const firstHalf = currentIslandDisplay.slice(0, index).concat([currentPlant]);
      console.log("firsthalf");
      console.log(firstHalf);
      const secondHalf = firstHalf.concat(
        currentIslandDisplay.slice(index + 1, 23)
      );
      console.log("secondhalf)");
      console.log(secondHalf);

      setCurrentIslandDisplay(secondHalf);
      // setCurrentIslandDisplay([BirdTree,"","","","","","","","","","","","","","","","","","","","","",""]);
      console.log("hey");
      console.log(currentIslandDisplay);

      setCurrentPlant("");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <NavLink exact to="/" activeClassName="active">
            <img className="roadmap-button" src={RoadmapButton} />
          </NavLink>
          <img className="roadmap-button" src={RoadmapButton} />

          <h1>{currentIslandDisplay[0]}</h1>
          <h1>{currentPlant}</h1>

          <div className="store-bg">
            <div className="shop-heading">
              <h3 className="shop-title">Store</h3>
              <h4 className="coin-count">Coins</h4>
            </div>

            <div className="shop-listings">
              <img
                onClick={() => {
                  handlePurchase(BirdTree);
                }}
                className="listing"
                src={BirdTreeListing}
              />
              <img
                onClick={() => {
                  handlePurchase(FloweringTree);
                }}
                className="listing"
                src={FloweringTreeListing}
              />
              <h4>sdf</h4>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="island-container">
            {/* <img className="island" src={IslandBg} /> */}
            <div className="island-overlay">
              <div class="grid-container">
                <div id="1" className="grid-box placeholder">
                  {currentIslandDisplay[0]}
                </div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div
                  id="0"
                  onClick={() => {
                    handleIslandUpdate(0);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[0]} />
                </div>
                <div
                  id="1"
                  onClick={() => {
                    handleIslandUpdate(1);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[1]} />
                </div>
                <div
                  id="2"
                  onClick={() => {
                    handleIslandUpdate(2);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[2]} />
                </div>
                <div
                  id="3"
                  onClick={() => {
                    handleIslandUpdate(3);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[3]} />
                </div>
                <div
                  id="4"
                  onClick={() => {
                    handleIslandUpdate(4);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[4]} />
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
