import React from 'react';

const EventsPage = () => {
    return (
        <div className="Events">
            <div>
            <h1>Events</h1>
            <h2 style={{ color: '#cce3f1' }}>Past: </h2> 
            <img
                src={require("../assets/mosmanpromo.JPG")}
                style={{ width: '50%', height: 'auto', minWidth: '350px' }}
                alt="Mosman Concert"
            /> 
            </div>
        </div>
    );
};

export default EventsPage;
