import React from "react";
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

function YoutubeVideo() {
  const { videoId } = useParams();
  console.log(videoId);
  return (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  );
}
export default YoutubeVideo;
