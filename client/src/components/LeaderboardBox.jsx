import React from 'react';
import { Link } from 'react-router-dom';

const LeaderboardBox = ({username, name, xp, icon, rank, userid, backgroundColor, onSelect}) => {

  const onFriendClicked = (e) => {
    console.log('from leaderboard: ' ,userid)
    onSelect(userid)
  }
  
  return (
    <div id="leaderboard-box" style={{backgroundColor: backgroundColor}} onClick={(e)=>{onFriendClicked(e)}}>
        <h1 style={{width:'30px'}}>{rank}</h1>
        <img src={icon} id='leaderboard-image'/>
        <div id='leaderboard-detail'>
            <h3 style={{fontWeight:'600', width:'20px'}}>{username}</h3>
            <h1 style={{width:'190px'}}>{name}</h1>
            <h3>{xp} XP</h3>
        </div>
        <Link to={`/edit/${userid}`}><button>VIEW</button></Link>
        
    </div>
  );
};

export default LeaderboardBox;
