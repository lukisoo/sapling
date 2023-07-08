import React from "react";
import StatisticsBox from "../components/StatisticsBox";
import fire from "../assets/fire.png";
import lightning from "../assets/lightning.png"
import plant from "../assets/plant.png"
import task from "../assets/task.png"
import trophy from "../assets/trophy.png"
import handshake from "../assets/handshake.png"
import dirt from "../assets/dirt.svg"
import rock from "../assets/rock.svg"
import lock from "../assets/lock.png"
import wood from "../assets/wood.svg"

export default function ProfilePage() {

    const statistics = [{
        number: '36', name: 'Day Streak', image: fire, color: '#FF9600'
      },
      {
        number: '8140', name: 'Total XP', image: lightning, color: '#FFC927'
      },
      {
        number: '129', name: 'Tasks Completed', image: task, color: '#F45858'
      },
      {
        number: '49', name: 'Co-worker Interaction', image: handshake, color: '#6AACDA'
      },
      {
        number: '23', name: 'Plants Placed', image: plant, color: '#98CD64'
      },
      {
        number: '3', name: 'Top 3 Finishes', image: trophy, color: '#CC8F01'
    }];

    const renderedStatisticsList = statistics.map((statistic, index) => {
        return <StatisticsBox id={index} name={statistic.name} number={statistic.number} imageSrc={statistic.image} color={statistic.color}/>
    });

    return (
    <React.Fragment>
    <div id='user-details'>
        <h1>Daniel Torrey</h1>
        <h2>Whoreytorrey</h2>
        <h2>Joined April 2023</h2>
    </div>

    <div id='user-information'>
        <h1>Statistics</h1>
        <div id='user-statistics'>
            {renderedStatisticsList}
        </div>
    </div>

    <div id='leaderboard-header'> 
        <div id='leaderboard-image'>
            <img src={wood}/>
            <img src={rock}/>
            <img src={dirt}/>
            <img src={lock}/>
            <img src={lock}/>
        </div>
    </div>


    
    </React.Fragment>
    );
};
