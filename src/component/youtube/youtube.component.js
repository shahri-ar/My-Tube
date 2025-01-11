import React, { useState } from "react";
import axios from "axios";
import VideoPlayer from "./videoSection.component";
import List from "./suggestionList.component";
import logo from "./image/logo.png";

function YouTube() {
  const [queary, setQueary] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");

  const video = videos.find((video) => video.id.videoId === videoId);

  const handleSubmit = async (e) => {
    console.log(videos);
    try {
      e.preventDefault();

      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const key = "AIzaSyDYLxnL93zhsFR5OM_hc5Nov-djCJPpo-o";
      const type = "video";
      const part = "snippet";
      const maxResults = "15";

      const { data } = await axios.get(
        `${baseUrl}?key=${key}&type=${type}&maxResults=${maxResults}&part=${part}&q=${queary}`
      );
      setVideos(data.items);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  return (
    <div className="container">
      <header className="navbar navbar-light bg-light">
        <img
          style={{ height: "4.9rem", width: "7rem" }}
          src={logo}
          alt="My Website Logo"
          className="navbar-brand"
        />
        <form className="d-flex ml-auto mr-6" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setQueary(e.target.value)}
            className="form-control me-2" // Bootstrap 5 utility class
            placeholder="Search..."
            value={queary}
          />
          <button type="submit" className="btn btn-success ">
            Search
          </button>
        </form>
      </header>

      <div className="row mt-4">
        <VideoPlayer
          videoId={videoId}
          title={video?.snippet?.title || ""}
          description={video?.snippet?.description || ""}
        />
        <List handleSelect={(videoId) => setVideoId(videoId)} videos={videos} />
      </div>
    </div>
  );
}

export default YouTube;
