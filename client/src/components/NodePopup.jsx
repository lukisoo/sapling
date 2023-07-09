import React from 'react';

const NodePopup = (props) => {
    const {task, coins} = props;

    const complete = (event) => {
        event.preventDefault();
        console.log("open modal");
    }

    return (

        <div style={{position: 'relative', display: 'inline-block', padding: "10px", width: "120%", fontSize: '0.1em'}}>
            <img src="node_popup.svg" style={{width: '100%'}}/>
            <p
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '45%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: "10px"
                }}
            >
                <div>
                    <b>
                        {task}
                    </b>
                </div>

                <br/>
                <div style={{fontSize: 10, paddingBottom: '60px'}}>
                    +{coins} coins
                </div>
            </p>
            <a href="/task">
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
                    onClick={complete}
                >
                    <img src="node_popup_button.svg" style={{width: '100%', height: '100%'}}/>
                </button>
            </a>
        </div>
    );
};

export default NodePopup;
