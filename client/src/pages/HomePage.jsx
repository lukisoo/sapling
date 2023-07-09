import React, {useState} from "react";
import HomeFooter from "../components/HomeFooter";
import Roadmap from "../components/Roadmap";
import CompleteTaskPopup from "../components/CompleteTaskPopup.jsx";
import Confetti from "react-confetti";

const activities = [
    "Grab coffee with Matthew",
    "Go on a 15 minute walk in Albert Park with John",
    "Do a 10 minute breathing meditation with Raymond",
    "Go for a run around the block with Emily",
    "Join a lunchtime yoga session with Sarah in the park",
    "Organize a pickup football game with Kevin and team",
    "Participate in a community cleanup with Laura",
    "Start a weekend hiking club with Thomas",
    "Join an outdoor reading group with Emma",
    "Plan a picnic lunch at a nearby park with Mia",
    "Start a morning cycling routine with Daniel",
    "Join Sophia for a game of Frisbee in the park",
    "Go bird watching in the early morning with Alex",
    "Have a working lunch outside with Oliver",
    "Start a gardening club with Lily",
    "Join Ava for a skateboarding session after work",
    "Start a sunrise photography club with Ethan",
    "Go for a paddleboarding session with Isabella",
    "Have a BBQ party after work with Noah and the team",
    "Start a weekly farmer's market visit with Charlotte"
];

const roadmapItemsInitial = [
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
    const [index, setIndex] = useState(1);
    const [roadmapItems, setRoadmapItems] = useState(roadmapItemsInitial);
    const [showConfetti, setShowConfetti] = useState(false);

    const close = () => {
        setShowPopup(false);
    }

    const open = (task, coins) => {
        setTask(task);
        setCoins(coins);
        setShowPopup(true);
    }

    const increment = () => {
        const type = roadmapItems[index].type;
        console.log(type);
        if (type === "current_0") {
            roadmapItems[index].type = "current_25";
        } else if (type === "current_25") {
            roadmapItems[index].type = "current_50";
        } else if (type === "current_50") {
            roadmapItems[index].type = "current_75";
        } else if (type === "current_75") {
            roadmapItems[index].type = "finished"
            roadmapItems[index+1].type = "current_0"
            setIndex(index + 1);
        }

        const randomIndex = Math.floor(Math.random() * activities.length);
        const randomCoins = Math.floor(Math.random() * (700 - 200 + 1)) + 200;
        roadmapItems[index].task = activities[randomIndex];
        roadmapItems[index].coins = randomCoins;

        setRoadmapItems(roadmapItems);

        // TODO: LUCY INCREMENT COINS GLOBALLY AND STREAK

        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 3000)
    }

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            {showConfetti && <Confetti numberOfPieces={200} recycle={false}/>}
            <Roadmap items={roadmapItems} open={open}/>
            {showPopup && <CompleteTaskPopup increment={increment} task={task} coins={coins} close={close}/>}
            <HomeFooter />
        </div>
    );
};