import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <video
        src="../public/Hero.mp4" // Path to your video in the public folder
        controls
        autoPlay
        loop
        muted
        style={{ width: "100%", borderRadius: "12px" }}
      />
    </div>
  );
};

export default VideoPlayer;
