import React from 'react';

const HomePage = () => {
    return (
        <div className="App">
            <div>
            <h2>The Premier Young Classical Guitar Ensemble based in Sydney, Australia</h2>
            <img
                src={require("../assets/IntrusionsPromo.jpg")}
                style={{ width: '35%', height: 'auto', minWidth: '300px' }}
                alt="Sydney Guitar Collective"
            /> 
            <h2 style={{ color: '#cce3f1' }}>New concert announced! 18th of May @ Mosman Art Gallery, Tickets available here: </h2>
            <a
            href="https://events.humanitix.com/sydney-guitar-collective___intrusions___"
            style={{
                textDecoration: 'none',
                color: '#fff',
                backgroundColor: '#007bff',
                padding: '10px 20px',
                borderRadius: '5px',
                display: 'inline-block',
            }}
            >
            Get Tickets on Humanitix
            </a>        
            </div>
        </div>
    );
};

export default HomePage;
