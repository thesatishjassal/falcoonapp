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
          <p>Scroll → and tap to watch</p>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="videos-row">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => setActiveVideo(video)}
            >
              <iframe
                src={video + "?mute=1&controls=0"}
                title={`video-${index}`}
                frameBorder="0"
              />

              {/* Play overlay */}
              <div className="play-btn">▶</div>
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
              <button
                className="video-close"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              <iframe
                src={activeVideo + "?autoplay=0&controls=0"}
                title="active-video"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                className="video-modal__player"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
