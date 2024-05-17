import React from 'react';
import AboutUs from './AboutUs';
import HeadshotSection from './HeadshotSection';
import PageContentWithPadding from './PageContentWithPadding';

const AboutPage = () => {
    const headerHeight = `${window.innerHeight * 0.15}px`; // Example: 15% of viewport height in pixels

    return (
        <PageContentWithPadding headerHeight={headerHeight}>
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
        </PageContentWithPadding>
    );
};

export default AboutPage;
