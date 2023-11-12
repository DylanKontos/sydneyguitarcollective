import React from 'react';
import AboutUs from './AboutUs';
import HeadshotSection from './HeadshotSection';

const AboutPage = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <div>
            <img
                src={require("../assets/SydneyGuitarCollective-11.jpg")}
                style={{ width: '40%', height: 'auto', minWidth: '300px' }}
                alt="Sydney Guitar Collective"
            /> 
            <br/>
            <br/>
            <br/>
            <AboutUs />
            <br/>
            <h2>Members</h2>
            <HeadshotSection />
            </div>
        </div>
    );
};

export default AboutPage;