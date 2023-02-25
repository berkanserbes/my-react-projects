import React from "react";

function Video({ videoSrc }) {
  return (
    <div>
      <video loop controls autoPlay muted src={videoSrc} />
    </div>
  );
}

export default Video;
