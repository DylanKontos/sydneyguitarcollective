import React from 'react';

const HomePage = () => {
    return (
        <div className="App">
            <div>
            <h2>The Premier Young Classical Guitar Ensemble based in Sydney, Australia</h2>
            <img
                src={require("../assets/SydneyGuitarCollective-9.jpg")}
                style={{ width: '35%', height: 'auto', minWidth: '300px' }}
                alt="Sydney Guitar Collective"
            /> 
            </div>
        </div>
    );
};

export default HomePage;
