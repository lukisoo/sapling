import React from 'react';

const CompleteTaskPopup = (props) => {
    const {task, coins, close} = props;

    const closePopup = () => {
        close();
    }

  const toggleConfirm = () => {
      console.log("CONFIRMED");
      close()
  };

  return (
    <div>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '40%',
            borderRadius: '40px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            background: '#2A6025',
            zIndex: 999,
            padding: 30,
            color: 'white',
            fontSize: '1.3em'
          }}
        >
            
          <h2>{task}</h2>
          <p>+{coins} coins</p>
            <img src="task_popup_tick.svg" style={{ width: '20%', height: '20%' }} />
            <img src="task_popup_emptytick.svg" style={{ width: '20%', height: '20%' }} />
            <button onClick={toggleConfirm} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <img src="task_popup_confirm.svg" style={{ width: '95%', height: '95%' }} />
            </button>
            <button onClick={closePopup} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <img src="task_popup_close.svg" style={{ width: '80%', height: '80%' }} />
            </button>
            <p>
                You
                Matthew
            </p>
        </div>
    </div>
  );
};

export default CompleteTaskPopup;
