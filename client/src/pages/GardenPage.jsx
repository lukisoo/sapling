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

  const [currentStatusMessage, setCurrentStatusMessage] = useState(
    "Your garden is looking incredibly bare..."
  );

  const [shopEnabled, setShopEnabled] = useState(true);

  const handlePurchase = (selectedPlant) => {
    //TODO CHECK MONEY IF POSSIBLE
    // Enable click to add

    // Plant successfully selected -> need to add to island
    setShopEnabled(false);
    setCurrentPlant(selectedPlant);
  };

  const handleIslandUpdate = (index) => {
    //TODO CHECK IF THERE IS A PLANT EXISTING ALREADY (DENY THEM)

    //Check if no plant selected (do nothing)
    if (currentPlant == "") {
      setCurrentStatusMessage(
        "Please buy a plant first before you can place it!"
      );
    } else {
      //TODO: CHECK IF PLANT ALREADY EXISTS IN SAID POSITION

      // Update the plant onto said position
      // console.log(currentIslandDisplay, currentPlant);
      // console.log("HERE")
      // console.log(currentIslandDisplay[(0, index)])
      // console.log(currentPlant)
      // console.log([currentPlant])
      // console.log(currentIslandDisplay[(0, index)].concat([currentPlant]))

      const firstHalf = currentIslandDisplay
        .slice(0, index)
        .concat([currentPlant]);
      // console.log("firsthalf");
      // console.log(firstHalf);
      const secondHalf = firstHalf.concat(
        currentIslandDisplay.slice(index + 1, 25)
      );
      // console.log("secondhalf)");
      // console.log(secondHalf);

      setCurrentIslandDisplay(secondHalf);
      // setCurrentIslandDisplay([BirdTree,"","","","","","","","","","","","","","","","","","","","","",""]);
      // console.log("hey");
      // console.log(currentIslandDisplay);

      // Reset to initial shop screen
      setCurrentPlant("");
      setShopEnabled(true);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <NavLink exact to="/" activeClassName="active">
            <img className="roadmap-button" src={RoadmapButton} />
          </NavLink>
          {/* <h1>{currentIslandDisplay[0]}</h1>
          <h1>{currentPlant}</h1> */}

          <div className="store-bg">
            <div className="shop-heading">
              <h3 className="shop-title">Store</h3>
              <h4 className="coin-count">Coins</h4>
            </div>

            {shopEnabled ? (
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
              </div>
            ) : (
              <div>
                <h3>Congrats! Please place down your new plant!</h3>
                <img className="display-plant" src={currentPlant} />
              </div>
            )}
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

                <div
                  id="5"
                  onClick={() => {
                    handleIslandUpdate(5);
                  }}
                  className="grid-box valid"
                >
                  {" "}
                  <img className="grid-icon" src={currentIslandDisplay[5]} />
                </div>
                <div
                  id="6"
                  onClick={() => {
                    handleIslandUpdate(6);
                  }}
                  className="grid-box valid"
                >
                  {" "}
                  <img className="grid-icon" src={currentIslandDisplay[6]} />
                </div>
                <div
                  id="7"
                  onClick={() => {
                    handleIslandUpdate(7);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[7]} />
                </div>
                <div
                  id="8"
                  onClick={() => {
                    handleIslandUpdate(8);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[8]} />
                </div>
                <div
                  id="9"
                  onClick={() => {
                    handleIslandUpdate(9);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[9]} />
                </div>
                <div
                  id="10"
                  onClick={() => {
                    handleIslandUpdate(10);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[10]} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>

                <div
                  id="11"
                  onClick={() => {
                    handleIslandUpdate(11);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[11]} />
                </div>
                <div
                  id="12"
                  onClick={() => {
                    handleIslandUpdate(12);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[12]} />
                </div>
                <div
                  id="13"
                  onClick={() => {
                    handleIslandUpdate(13);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[13]} />
                </div>
                <div
                  id="14"
                  onClick={() => {
                    handleIslandUpdate(14);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[14]} />
                </div>
                <div
                  id="15"
                  onClick={() => {
                    handleIslandUpdate(15);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[15]} />
                </div>
                <div
                  id="16"
                  onClick={() => {
                    handleIslandUpdate(16);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[16]} />
                </div>
                <div
                  id="17"
                  onClick={() => {
                    handleIslandUpdate(17);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[17]} />
                </div>

                <div id="1" className="grid-box placeholder"></div>

                <div
                  id="18"
                  onClick={() => {
                    handleIslandUpdate(18);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[18]} />
                </div>
                <div
                  id="19"
                  onClick={() => {
                    handleIslandUpdate(19);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[19]} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div
                  id="20"
                  onClick={() => {
                    handleIslandUpdate(20);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[20]} />
                </div>
                <div
                  id="21"
                  onClick={() => {
                    handleIslandUpdate(21);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[21]} />
                </div>

                <div
                  id="22"
                  onClick={() => {
                    handleIslandUpdate(22);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[22]} />
                </div>
                <div
                  id="23"
                  onClick={() => {
                    handleIslandUpdate(23);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[23]} />
                </div>
                <div
                  id="24"
                  onClick={() => {
                    handleIslandUpdate(24);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[24]} />
                </div>
                <div
                  id="25"
                  onClick={() => {
                    handleIslandUpdate(25);
                  }}
                  className="grid-box valid"
                >
                  <img className="grid-icon" src={currentIslandDisplay[25]} />
                </div>

                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
                <div id="1" className="grid-box placeholder"></div>
              </div>
            </div>
          </div>

          <div className="info-bg">
            <h2>{currentStatusMessage}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
