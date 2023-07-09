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
      <div className="popup-container">
          <div className="popup-content">
              <h2>{task}</h2>
              <p>+{coins} coins</p>
              <h3>Did you complete task?</h3>
              <button onClick={toggleConfirm} className="confirm-button">
                  <img src="task_popup_confirm.svg" alt="confirm" className="button-img" />
              </button>
              <button onClick={closePopup} className="close-button">
                  <img src="task_popup_close.svg" alt="close" className="button-img" />
              </button>
          </div>
      </div>
  );
};

export default CompleteTaskPopup;
