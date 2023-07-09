import React, {useState} from "react";
import { motion } from "framer-motion";

const Node = ({ type, onClick }) => {
    let imageSrc = "";

    switch (type) {
        case "current":
            imageSrc = "node_current.svg";
            break;
        case "finished":
            imageSrc = "node_finished.svg";
            break;
        default:
            imageSrc = "node_future.svg"
            break;
    }

    return (
        <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            src={imageSrc}
            alt={type}
        />
    )
};

export default Node;