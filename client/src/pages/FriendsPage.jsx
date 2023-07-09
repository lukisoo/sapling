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

export default function FriendsPage() {
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
        rank:"", icon: person, username:'mouyang2001', name:'Matthew Ouyang', xp:'900', userid:'1243'
      },
      {
        rank:"", icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:"", icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:"", icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      },
      {
        rank:"", icon: person, username:'mouyag2001', name:'Matthew Ouyang', xp:'900', userid:'123'
      }
    ]

    const renderedStatisticsList = statistics.map((statistic, index) => {
        return <StatisticsBox style={{marginLeft: "2%"}} key={index} name={statistic.name} number={statistic.number} imageSrc={statistic.image} color={statistic.color}/>
    });

    const renderedLeaderboard = tempLeaderboard.map((record, index) => {
      return <LeaderboardBox key={index} rank={record.rank} icon={record.icon} username={record.username} name={record.name} xp={record.xp} userid={record.userid}/>
    })
    return <div>
        
      <div id='friends'> 
          <div id="friends-text"> 
            <h1>Friends</h1>
          </div>
          <LeaderboardBox rank='' icon={person} username='mouyag2001' name='Matthew Ouyang' xp='900'userid='123'/>
          {renderedLeaderboard}
      </div>

    </div>;
};
