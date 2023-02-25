import React from "react";

function Menu({ onSelectVideo, videoValues }) {
  return (
    <form onClick={(e) => onSelectVideo(e.target.value)}>
      {videoValues.map((value, index) => (
        <div className="video-inputs">
          <input key={index} type="radio" name="src" value={value} />
          {value}
        </div>
      ))}
    </form>
  );
}

export default Menu;
