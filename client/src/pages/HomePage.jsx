import React from "react";
import HomeFooter from "../components/HomeFooter";
import Roadmap from "../components/Roadmap";
import NodePopup from "../components/NodePopup";
import nodePopup from "../components/NodePopup";


const roadmapItems = [
    { type: "finished", task: "grab coffee with Matthew", coins: 200 },
    { type: "current", task: "10 min walk with John in the nearest park", coins: 200 },
    { type: "future", task: "10 min breathing meditation with Daniel", coins: 200},
    { type: "future", task: "team picnic at local park", coins: 300 },
    { type: "future", task: "morning yoga session with Alice", coins: 250 },
    { type: "future", task: "outdoor team building game", coins: 500 },
    { type: "future", task: "lunch break hike nearby", coins: 350 },
    { type: "future", task: "bike ride with Emily", coins: 200 },
    { type: "future", task: "company-wide softball game", coins: 600 },
    { type: "future", task: "tree planting activity", coins: 450 },
    { type: "future", task: "charity fun run participation", coins: 400 },
    { type: "future", task: "outdoor photography session", coins: 300 }
];

export default function HomePage() {


    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <Roadmap items={roadmapItems}/>
            <HomeFooter />
        </div>
    );
};