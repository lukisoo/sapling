import Axios from 'axios';
import "./CompleteTaskPopup.css";

const CompleteTaskPopup = (props) => {
    const {task, coins, close, increment} = props;

    const closePopup = () => {
        close();
    }

  const toggleConfirm = () => {
    Axios.post("http://localhost:3000/slack-submit").then((response) => {
      console.log("Slack messaged was sent")
    })
      console.log("CONFIRMED");
      increment();
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
          <input type="checkbox" />
          <input type="checkbox" checked="checked"/>
            <button onClick={toggleConfirm} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <img src="task_popup_confirm.svg" style={{ width: '95%', height: '95%' }} />
            </button>
            <button onClick={closePopup} style={{ right: "60px", position: "relative", border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
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
