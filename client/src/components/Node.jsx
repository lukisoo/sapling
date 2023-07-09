import React, {useState} from "react";
import { motion } from "framer-motion";
import NodePopup from "./NodePopup.jsx";

const Node = ({ type, task, coins, open }) => {
    let imageSrc = "";

    const [popupVisible, setPopupVisible] = useState(false);

    switch (type) {
        case "current_0":
            imageSrc = "node_current_0.svg";
            break;
        case "current_25":
            imageSrc = "node_current_25.svg";
            break;
        case "current_50":
            imageSrc = "node_current_50.svg";
            break;
        case "current_75":
            imageSrc = "node_current_75.svg";
            break;
        case "current_100":
            imageSrc = "node_current_100.svg";
            break;
        case "finished":
            imageSrc = "node_finished.svg";
            break;
        default:
            imageSrc = "node_future.svg"
            break;
    }

    const handleClick = () => {
        if (type === "current_0" || type === "current_25" || type === "current_50" || type === "current_75" || type === "current_100") {
            setPopupVisible(!popupVisible);
        }
    }

    const close = () => {
        setPopupVisible(false);
    }

    return (
        <div>
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{height:"100px", width: "auto"}}
                onClick={handleClick}
                src={imageSrc}
                alt={type}
            />
            {popupVisible && <NodePopup task={task} coins={coins} open={open} close={close}/>}
        </div>

    )
};

export default Node;