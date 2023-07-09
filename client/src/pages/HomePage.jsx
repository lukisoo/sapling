import React from "react";
import HomeFooter from "../components/HomeFooter";
import Roadmap from "../components/Roadmap";

const roadmapItems = [
    { type: "finished" },
    { type: "current" },
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"},
    { type: "future"}
];

export default function HomePage() {

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <Roadmap items={roadmapItems}/>
            <HomeFooter />
        </div>
    );
};