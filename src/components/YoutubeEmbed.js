import React from 'react';

function YouTubeEmbed({ url }) {
  const videoId = extractVideoId(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const isMobile = window.innerWidth < 768; // Define a breakpoint for mobile view

  const videoWidth = isMobile ? '100%' : '720px';
  const videoHeight = isMobile ? '200px' : '450px';

  return (
    <div>
      <iframe
        title="YouTube Video"
        width={videoWidth}
        height={videoHeight}
        src={embedUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}

function extractVideoId(url) {
  const videoIdRegex = /(?:\/|v=)([A-Za-z0-9_-]{11})$/;
  const match = url.match(videoIdRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    console.error('Invalid YouTube URL');
    return '';
  }
}

export default YouTubeEmbed;
