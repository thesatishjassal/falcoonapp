"use client";

export default function FalcoonVideos() {
  const videos = [
    "/assets/videos/1.mp4",
    "/assets/videos/2.mp4",
    "/assets/videos/3.mp4",
    "/assets/videos/4.mp4",
    // "/assets/vide
    //s/5.mp4",
    "/assets/videos/6.mp4",
    "/assets/videos/7.mp4",
  ];

  return (
    <section className="falcoon-videos" id="our_Work">
      <div className="falcoon-container">
        {/* HEADER */}
        <div className="falcoon-videos__header">
          <h2 className="falcoon-videos__title">🎥 Our Real Work</h2>
          <p className="falcoon-videos__subtitle">
            See how we build high-converting websites & automation systems
          </p>
        </div>

        {/* VIDEO LIST */}
        <div className="falcoon-videos__list">
          {videos.map((video, index) => (
            <div key={index} className="falcoon-videos__card">
              <video
                src={video}
                controls
                muted
                loop
                playsInline
                className="falcoon-videos__video"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
