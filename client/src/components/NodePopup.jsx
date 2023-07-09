import React from 'react';

const NodePopup = (props) => {
  const {task, coins} = props;

  return (

    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src="node_popup.svg" style={{ width: '100%' }} />
      <p
        style={{
          position: 'absolute',
          top: '50%',
          left: '32%',
          transform: 'translate(-50%, -50%)',
          color: 'white', paddingBottom:'20px'
        }}
      >
        <div style={{fontSize:25}}>
        <b>
          {task}
        </b>
        </div>
        
        <br />
        <div style={{fontSize:20, paddingBottom: '40px'}}>
          {coins}
        </div>
      </p>
      <a href={"/task"}>
        <button
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          border: 'none', 
          backgroundColor: 'transparent', 
          cursor: 'pointer',
          width: '80%',
          paddingBottom: '10px'
          }}
        >
          <img src="node_popup_button.svg" style={{ width: '100%', height: '100%' }} />
        </button>
      </a>
    </div>
  );
};

export default NodePopup;
