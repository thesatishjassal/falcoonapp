"use client";
import { useState } from "react";

export default function FalcoonVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    "/assets/videos/1.mp4",
    "/assets/videos/2.mp4",
    "/assets/videos/3.mp4",
    "/assets/videos/4.mp4",
    "/assets/videos/6.mp4",
    "/assets/videos/7.mp4",
  ];

  return (
    <section className="falcoon-videos" id="our_Work">
      <div className="falcoon-container">
        {/* HEADER */}
        <div className="falcoon-videos__header">
          <h2>Our Work in Action</h2>
          <p>Click any video to watch full screen</p>
        </div>

        {/* GRID */}
        <div className="falcoon-videos__grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => setActiveVideo(video)}
            >
              <video src={video} muted loop playsInline />
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeVideo && (
          <div className="video-modal" onClick={() => setActiveVideo(null)}>
            <div
              className="video-modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                className="video-close"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              {/* VIDEO PLAYER */}
              <video
                src={activeVideo}
                controls
                autoPlay
                className="video-modal__player"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
