import React from 'react';

const Roadmap = () => {

  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
    <div style={{ width: '200%' }}>
        <div style={{ position: 'absolute', left: '100px', top: '300px' }}>
            <img src="node_finished.svg" alt="Node 1" />
        </div>
        <div style={{ position: 'absolute', left: '400px', top: '200px' }}>
            <img src="node_current.svg" alt="Node 2" />
        </div>
        <div style={{ position: 'absolute', left: '700px', top: '300px' }}>
            <img src="node_future.svg" alt="Node 3" />
        </div>
        <div style={{ position: 'absolute', left: '1000px', top: '400px' }}>
            <img src="node_future.svg" alt="Node 4" />
        </div>
        <div style={{ position: 'absolute', left: '1300px', top: '500px' }}>
            <img src="node_future.svg" alt="Node 5" />
        </div>
        <div style={{ position: 'absolute', left: '1600px', top: '400px' }}>
            <img src="node_future.svg" alt="Node 6" />
        </div>
        <div style={{ position: 'absolute', left: '1900px', top: '300px' }}>
            <img src="node_future.svg" alt="Node 6" />
        </div>
    </div>
    </div>
  );
};

export default Roadmap;
