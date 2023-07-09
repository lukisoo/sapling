import React from 'react';
import {NavLink} from "react-router-dom";

const HomeFooter = () => {

    return (
        <div
          style={{
            backgroundColor: '#AFD951',
            height: '20%',
            width: '100%',
            position: 'fixed',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 20px',
          }}
        >   
            <div>
                <img src="footer_garden.svg" style={{ left:'-15%', position:'fixed', bottom:'-22%', height:'50%' }} />
            </div>
            <div style={{ position: 'absolute', marginRight: '10%' }}>

            <NavLink to="/garden" activeClassName="active">
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        <img src="footer_visit.svg" alt="Button" style={{ width: '100%', height: '100%' }} />
                    </button>
          </NavLink>

            </div>
            <img src="footer_flowers.svg" alt="Footer Flowers" style={{ height: '120%', marginRight: '2%', marginTop: '-1%' }} />
        </div>
    );
};

export default HomeFooter;

