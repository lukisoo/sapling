import React from "react";
import StatisticsBox from "../components/StatisticsBox";
import LeaderboardBox from "../components/LeaderboardBox";
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
import person from "../assets/person.svg"

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
        rank:'1', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:'2', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:'3', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:'4', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:'5', icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      }
    ]

    const renderedStatisticsList = statistics.map((statistic, index) => {
        return <StatisticsBox key={index} name={statistic.name} number={statistic.number} imageSrc={statistic.image} color={statistic.color}/>
    });

    const renderedLeaderboard = tempLeaderboard.map((record, index) => {
      return <LeaderboardBox key={index} rank={record.rank} icon={record.icon} username={record.username} name={record.name} xp={record.xp} userid={record.userid}/>
    })

    console.log(renderedLeaderboard)

    return (
    <div id='profile-page'>
      <div id='user'>
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
      </div>

      <div id='leaderboard'> 
          <div id='leaderboard-image'>
              <img src={wood}/>
              <img src={rock}/>
              <img src={dirt}/>
              <img src={lock}/>
              <img src={lock}/>
          </div>
          <div id="leaderboard-text"> 
            <h1>Leaderboard</h1>
          </div>
          <LeaderboardBox rank='1' icon={person} username='mouyag2001' name='Matthew Ouyang' xp='900'userid='123'/>
          {renderedLeaderboard}
      </div>
    </div>
    );
};
