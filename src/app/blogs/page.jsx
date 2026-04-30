"use client";

import { useState } from "react";

export default function BlogPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const blogs = [
    {
      title: "How Fitness Coaches Get Clients",
      desc: "Watch this full funnel breakdown",
      type: "video",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      tag: "Funnels",
    },
    {
      title: "Instagram Ads That Convert",
      desc: "Stop wasting money on ads",
      type: "article",
      img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
      tag: "Marketing",
    },
  ];

  return (
    <section className="falcoon-blog">

      {/* 🔥 HERO */}
      <div className="falcoon-blog__hero">
        <h1>
          Learn How to <span>Get Clients Online</span>
        </h1>
        <p>
          Funnels, ads & systems explained simply for fitness professionals.
        </p>

        {/* <div className="falcoon-blog__hero-actions">
          <button className="falcoon-btn falcoon-btn--dark">
            Watch Strategy →
          </button>
          <button className="falcoon-btn falcoon-btn--light">
            Explore Blogs
          </button>
        </div> */}
      </div>

      <div className="falcoon-container">

        {/* 🔥 FEATURED VIDEO */}
        <div className="falcoon-blog__featured">
          <div
            className="falcoon-video big"
            onClick={() => setActiveVideo(blogs[0].videoId)}
          >
            <img src={blogs[0].thumbnail} alt="" />
            <div className="falcoon-play">▶</div>
          </div>

          <div className="falcoon-blog__featured-content">
            <span className="tag">{blogs[0].tag}</span>
            <h2>{blogs[0].title}</h2>
            <p>{blogs[0].desc}</p>
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="falcoon-blog__grid">
          {blogs.map((b, i) => (
            <div className="falcoon-blog__card" key={i}>

              {b.type === "video" ? (
                <div
                  className="falcoon-video"
                  onClick={() => setActiveVideo(b.videoId)}
                >
                  <img src={b.thumbnail} alt="" />
                  <div className="falcoon-play">▶</div>
                </div>
              ) : (
                <img src={b.img} alt="" />
              )}

              <div className="falcoon-blog__content">
                <span className="tag">{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 VIDEO MODAL */}
      {activeVideo && (
        <div
          className="falcoon-video-modal"
          onClick={() => setActiveVideo(null)}
        >
          <div className="falcoon-video-box">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}