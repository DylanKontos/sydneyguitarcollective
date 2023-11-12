import React from 'react';
import YouTubeEmbed from './YoutubeEmbed';

const VideosPage = () => {
    return (
        <div className="Videos">
            <h1>Videos</h1>
            <div>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=uWP38X9rWJY" />
            <p style={{ fontSize: '20px'}}> Philip Glass - Opening</p> 
            <br/>
            <br/>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=1j3qi9eXEyg" />
            <p style={{ fontSize: '20px'}}> VIncent Lindsey-Clark - Pulsar</p> 
            <br/>
            <br/>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=1zX7JpHvJyM" />
            <p style={{ fontSize: '20px'}}> Richard Charlton - ‘Manta Ray Ballet’ From Five Tails in Cold Blood</p>
            <br/>
            <h3 style={{ color: '#cce3f1' }}>More videos on our YouTube channel here: </h3>
            <a
            href="https://www.youtube.com/@SydneyGuitarCollective"
            style={{
                textDecoration: 'bold',
                color: '#fff',
                backgroundColor: '#FF0000',
                padding: '10px 20px',
                borderRadius: '5px',
                display: 'inline-block',
                fontWeight: 'bold',
            }}
            >
            YouTube
            </a>
            </div>
        </div>
    );
};

export default VideosPage;