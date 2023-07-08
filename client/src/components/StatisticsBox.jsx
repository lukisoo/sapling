import React from 'react';

const StatisticsBox = ({imageSrc, number, name, color}) => {
    console.log(color)
    const textStyle = {
        color: color // Use the 'color' prop value to set the text color
      };
  return (
    <div id="statistics-box">
      <img id="statistics-box-image" src={imageSrc} alt="Image" />
      <div id='statistics-box-details'>
        <span id="statistics-box-number" style={textStyle}>{number}</span>
        <br/> 
        <span id="statistics-box-name">{name}</span>
      </div>
    </div>
  );
};

export default StatisticsBox;
