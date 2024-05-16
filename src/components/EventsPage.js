import React from 'react';
import PageContentWithPadding from './PageContentWithPadding';

const EventsPage = () => {
    const headerHeight = `${window.innerHeight * 0.15}px`; // Example: 15% of viewport height in pixels

    return (
        <PageContentWithPadding headerHeight={headerHeight}>
            <div className="Events">
                <div>
                <h1>Events</h1>
                <h2>Upcoming: </h2> 
                <img
                    src={require("../assets/IntrusionsPromo.jpg")}
                    style={{ width: '50%', height: 'auto', minWidth: '350px' }}
                    alt="Mosman Concert"
                /> 
                <h2>Tickets available here: </h2>
                <a
                href="https://events.humanitix.com/sydney-guitar-collective___intrusions___"
                style={{
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    display: 'inline-block',
                }}
                >
                Get Tickets on Humanitix
                </a>
                <h2>Past: </h2> 
                <img
                    src={require("../assets/mosmanpromo.JPG")}
                    style={{ width: '50%', height: 'auto', minWidth: '350px' }}
                    alt="Mosman Concert"
                /> 
                </div>
            </div>
        </PageContentWithPadding>
    );
};

export default EventsPage;
