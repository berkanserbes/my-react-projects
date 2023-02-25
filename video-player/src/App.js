import React, { useState } from "react";
import Menu from "./components/Menu";
import Video from "./components/Video";
import { videos } from "./videoData.js";

const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.cat);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}

export default App;
