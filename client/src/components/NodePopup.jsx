import React from "react";

const NodePopup = (props) => {
  const { task, coins, open, close } = props;

  const complete = () => {
    console.log("Modal Popup");
    open(task, coins);
    close();
  };

  return (
    <div
      style={{
        // backgroundColor: "purple",
        position: "relative",
        right: "55px",
        display: "inline-block",
        paddingBottom: "10px",
        height: "150px",
        width: "200%",
        fontSize: "0.1em",
      }}
    >
      <img src="node_popup.svg" style={{ width: "100%" }} />
      <p
        style={{
          marginTop: "30px",
          width: "80%",
          // backgroundColor: "blue",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "14px",
        }}
      >
        <div>
          <b>{task}</b>
        </div>

        <div style={{ fontSize: 12, paddingTop: "5px", paddingBottom: "40px" }}>
          +{coins} coins
        </div>
      </p>
      <button
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          width: "80%",
          //   paddingBottom: "px",
        }}
        onClick={complete}
      >
        <img
          src="node_popup_button.svg"
          style={{ width: "100%", height: "100%" }}
        />
      </button>
    </div>
  );
};

export default NodePopup;
