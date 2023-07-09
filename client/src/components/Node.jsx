import React, {useState} from "react";
import { motion } from "framer-motion";
import NodePopup from "./NodePopup.jsx";

const Node = ({ type, task, coins }) => {
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
        if (type === "current") {
            setPopupVisible(!popupVisible);
        }
    }


    return (
        <div>
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                src={imageSrc}
                alt={type}
            />
            {popupVisible && <NodePopup task={task} coins={coins} />}
        </div>

    )
};

export default Node;