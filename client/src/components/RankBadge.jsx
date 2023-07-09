import React from 'react';

const RankBadge = ({icon, league, nextIcon}) => {

  return (
    <div id="rank-badge-box">
      <img id="rank-badge-image" src={icon} alt="Image" />
      <div id='rank-badge-details'>
        <span>Matthew's Current Rank:</span>
        <br/> 
        <span id="rank-badge-league" style={{fontWeight:'bold', position:'relative', top:'8px'}}>{league}</span>
      </div>
    </div>
  );
};

export default RankBadge;
