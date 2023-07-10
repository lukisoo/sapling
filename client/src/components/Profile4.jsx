import React from "react";
import RankBadge from "./RankBadge";
import dirt from "../assets/dirt.svg";
import lock from "../assets/lock.png";
import garden from "../assets/MatthewGarden.svg"

const Profile4 = () => {
    return (
        <div>       
            <div>profile 4</div>
            <RankBadge icon={dirt} nextIcon={lock} league='Sprout League'/>
            <div id='garden-image'>
                <img src={garden}/>
            </div>
        </div>

    )
}

export default Profile4;