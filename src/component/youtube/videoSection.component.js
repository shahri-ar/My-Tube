import React from "react";

function VideoPlayer({ videoId, title, description }) {
  return (
    <div className="col-lg-8 mb-4">
      <div className="video">
        <iframe
          style={{ "border-radius": "7px" }}
          title="player"
          width="100%"
          height={468}
          src={`https://www.youtube.com/embed/${videoId}`}
          //frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="details">
        <h6>{title}</h6>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
