import React, {useState} from "react";
import HomeFooter from "../components/HomeFooter";
import Roadmap from "../components/Roadmap";
import CompleteTaskPopup from "../components/CompleteTaskPopup.jsx";


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

    const [showPopup, setShowPopup] = useState(false);
    const [task, setTask] = useState("Random task");
    const [coins, setCoins] = useState(0);

    const close = () => {
        setShowPopup(false);
    }

    const open = (task, coins) => {
        setTask(task);
        setCoins(coins);
        setShowPopup(true);
    }

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <Roadmap items={roadmapItems} open={open}/>
            {showPopup && <CompleteTaskPopup task={task} coins={coins} close={close}/>}
            <HomeFooter />
        </div>
    );
};