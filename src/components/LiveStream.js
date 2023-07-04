import React from 'react';

function VideoPlayer({ videoId }) {
  let streamUrl = '';

  if (videoId === 'video1') {
    streamUrl = 'http://admin:Saira2020@202.123.141.238:8012/video1.mjpg';
  } else if (videoId === 'video2') {
    streamUrl = 'http://admin:Saira2020@202.123.141.238:8012/video2.mjpg';
  } else if (videoId === 'video3') {
    
  }

  return (
    <div>
      <h2>Video Player</h2>
      <video src={streamUrl} controls autoPlay />
    </div>
  );
}

export default VideoPlayer;
