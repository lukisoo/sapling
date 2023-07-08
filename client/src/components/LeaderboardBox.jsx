import React from 'react';

const LeaderboardBox = ({username, name, xp, icon, rank}) => {
  return (
    <div id="leaderboard-box">
        <h1>{rank}</h1>
        <img src={icon} id='leaderboard-image'/>
        <div id='leaderboard-detail'>
            <h3 style={{fontWeight:'600'}}>{username}</h3>
            <h1>{name}</h1>
            <h3>{xp} XP</h3>
        </div>
        <button>VIEW</button>
    </div>
  );
};

export default LeaderboardBox;
