import React, {useState} from "react";
import HomeFooter from "../components/HomeFooter";
import Roadmap from "../components/Roadmap";
import CompleteTaskPopup from "../components/CompleteTaskPopup.jsx";


const roadmapItems = [
    { type: "finished", task: "Grab coffee with Matthew", coins: 200 },
    { type: "current_0", task: "Go on a 15 minute walk in Albert Park with John", coins: 200 },
    { type: "future", task: "Do a 10 minute breathing meditation with Raymond", coins: 200},
    { type: "future", task: "Go for a picnic at Auckland Domain with Matthew", coins: 300 },
    { type: "future", task: "Have a morning yoga session with Alice", coins: 250 },
    { type: "future", task: "Organise outdoor team building with Michelle", coins: 500 },
    { type: "future", task: "Go for a lunch break hike up One Tree Hill", coins: 350 },
    { type: "future", task: "Go for a bike ride with Emily", coins: 200 },
    { type: "future", task: "Organise a team-wide football game with Youxiang", coins: 600 },
    { type: "future", task: "Plant a flower in the company garden with Lucy", coins: 450 },
    { type: "future", task: "Organise a charity fun run with Zoe", coins: 400 },
    { type: "future", task: "Have an outdoor photoshoot with Tristan", coins: 300 }
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