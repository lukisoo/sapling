import React from "react";
import StatisticsBox from "../components/StatisticsBox";
import LeaderboardBox from "../components/LeaderboardBox";
import fire from "../assets/fire.svg";
import lightning from "../assets/lightning.svg"
import plant from "../assets/plant.svg"
import task from "../assets/task.svg"
import trophy from "../assets/trophy.svg"
import handshake from "../assets/handshake.svg"
import dirt from "../assets/dirt.svg"
import rock from "../assets/rock.svg"
import lock from "../assets/lock.svg"
import wood from "../assets/wood.svg"
import person from "../assets/person.svg"

import ProfileHeading from "../assets/profile-heading.svg";

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

    
    const tempLeaderboard = [
      {
        rank:'1', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'1', backgroundColor: '#F0FFF0'
      },
      {
        rank:'2', icon: person, username:'ylei532', name:'Youxiang Lei', xp:'700', userid:'2', backgroundColor: '#F0FFF0'
      },
      {
        rank:'3', icon: person, username:'whoreytorrey', name:'Daniel Torrey', xp:'500', userid:'3', backgroundColor: '#A2D39D'
      },
      {
        rank:'4', icon: person, username:'nroh555', name:'Naren Rohan', xp:'500', userid:'4', backgroundColor: '#F0FFF0'
      },
      {
        rank:'5', icon: person, username:'lukisoo', name:'Lucy Zhu', xp:'400', userid:'5', backgroundColor: '#F0FFF0'
      },
      {
        rank:'6', icon: person, username:'zoemlt', name:'Zoe Niu', xp:'300', userid:'6', backgroundColor: '#F0FFF0'
      }
    ]

    const renderedStatisticsList = statistics.map((statistic, index) => {
        return <StatisticsBox key={index} name={statistic.name} number={statistic.number} imageSrc={statistic.image} color={statistic.color}/>
    });

    const renderedLeaderboard = tempLeaderboard.map((record, index) => {
      return <LeaderboardBox key={index} rank={record.rank} icon={record.icon} username={record.username} name={record.name} xp={record.xp} userid={record.userid} backgroundColor={record.backgroundColor}/>
    })

    console.log(renderedLeaderboard)

    return (
    <div id='profile-page'>
      <div id='user'>
      <img style={{width:"100%"}} src={ProfileHeading}/>

        {/* <div id='user-details'>
            <h1>Daniel Torrey</h1>
            <h2>whoreytorrey</h2>
            <h2>Joined April 2023</h2>
        </div> */}

        <div style={{marginLeft: "%"}} id='user-information'>
            <h1>Statistics</h1>
            <div id='user-statistics'>
                {renderedStatisticsList}
            </div>
        </div>
      </div>

      <div id='leaderboard'> 
          {/* <div id='leaderboard-image'>
              <img src={wood}/>
              <img src={rock}/>
              <img src={dirt}/>
              <img src={lock}/>
              <img src={lock}/>
          </div> */}
          <div id="leaderboard-text"> 
            <h1>Leaderboard</h1>
          </div>
          {renderedLeaderboard}
      </div>
    </div>
    );
};
