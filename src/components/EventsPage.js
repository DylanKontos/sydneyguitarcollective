import React from 'react';

const EventsPage = () => {
    return (
        <div className="Events">
            <div>
            <h1>Events</h1>
            <h2 style={{ color: '#cce3f1' }}>Upcoming: </h2> 
            <img
                src={require("../assets/mosmanpromo.JPG")}
                style={{ width: '50%', height: 'auto', minWidth: '350px' }}
                alt="Mosman Concert"
            /> 
            <h2 style={{ color: '#cce3f1' }}>Tickets available here: </h2>
            <a
            href="https://events.humanitix.com/sydney-guitar-collective"
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

export default EventsPage;