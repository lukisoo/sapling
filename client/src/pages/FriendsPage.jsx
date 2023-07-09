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
import Garden1 from "../components/Garden1";
import Preview1 from "../assets/GardenPreview1.svg";
import Preview2 from "../assets/GardenPreview2svg.svg";
import Preview4 from "../assets/GardenPreview3.svg";
import Preview5 from "../assets/GardenPreview5.svg";
import Preview6 from "../assets/GardenPreview6.svg";
import { useState } from "react";

export default function FriendsPage() {

  const [selected, setSelected] = useState('')
  let renderedPreview = null;
    
  const tempLeaderboard = [
    {
      rank:'', icon: person, username:'mouyang2001', name:'Matthew Ouyang', xp:'900', userid:'1', backgroundColor: '#F0FFF0'
    },
    {
      rank:'', icon: person, username:'ylei532', name:'Youxiang Lei', xp:'700', userid:'2', backgroundColor: '#F0FFF0'
    },
    {
      rank:'', icon: person, username:'nroh555', name:'Naren Rohan', xp:'500', userid:'4', backgroundColor: '#F0FFF0'
    },
    {
      rank:'', icon: person, username:'lukisoo', name:'Lucy Zhu', xp:'400', userid:'5', backgroundColor: '#F0FFF0'
    },
    {
      rank:'', icon: person, username:'zoemlt', name:'Zoe Niu', xp:'300', userid:'6', backgroundColor: '#F0FFF0'
    }
  ]


    //const renderedStatisticsList = statistics.map((statistic, index) => {
        //return <StatisticsBox style={{marginLeft: "2%"}} key={index} name={statistic.name} number={statistic.number} imageSrc={statistic.image} color={statistic.color}/>
    //});
  
  //console.log('from friend page:', selected)
  

  if (selected === '') {
    console.log('here')
    renderedPreview = Preview1
  } else if (selected === '1') {
    console.log('here!')
    renderedPreview = Preview1 
  } else if (selected === '2') {
    console.log('here!!')
    renderedPreview = Preview2
  } else if (selected === '4') {
    console.log('here!!')
    renderedPreview = Preview4
  } else if (selected === '5') {
    console.log('here!!')
    renderedPreview = Preview5
  } else if (selected === '6') {
    console.log('here!!')
    renderedPreview = Preview6
  }
  else {
    renderedPreview = null
  }

    const renderedLeaderboard = tempLeaderboard.map((record, index) => {
      return <LeaderboardBox key={index} 
      rank={record.rank} 
      icon={record.icon} 
      username={record.username} 
      name={record.name} 
      xp={record.xp} 
      userid={record.userid}
      onSelect={setSelected}/>
    })
    return <div id='friends-page'>
        
      <div id='friends'> 
          <div id="friends-text"> 
            <h1>Friends</h1>
          </div>
          {renderedLeaderboard}
      </div>

      <div id='garden-preview'>
        <img src={renderedPreview}/>
      </div>

    </div>;
};
