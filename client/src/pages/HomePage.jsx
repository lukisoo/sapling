import React from "react";

export default function HomePage() {

    const stickyStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      };

    return (
        <div>
            <div>
                <h1>Home</h1>
                <img src="node_finished.svg" alt="Node 1" />
            </div>

        <div style={stickyStyle}>
            <img src="home_footer.svg" alt="Home Footer" />
        </div>
    </div>
    );
};