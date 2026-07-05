"use client";

import { useRef, useState, useEffect } from "react";
import TreeMark from "./TreeMark";
import BookingBar from "./BookingBar";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  // Fade out controls after 2.5 seconds of playing
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    } else {
      setShowControls(true);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=2400&auto=format&fit=crop"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50 pointer-events-none" />

      {/* Invisible tap overlay that covers the video area to toggle play/pause */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={togglePlay}
        aria-label="Toggle video"
      />

      {/* Centered logo and button wrapper. pointer-events-none lets clicks fall through to the overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center pointer-events-none">
        <h1 className="sr-only">Commune 18</h1>
        <TreeMark className="w-72 sm:w-[450px] h-14 sm:h-20 text-white mb-8 -mt-32 sm:-mt-40" />

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`mt-10 w-12 h-12 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-1000 pointer-events-auto ${showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
        >
          {isPlaying ? (
            <span className="font-bold text-[10px] tracking-widest">||</span>
          ) : (
            <span className="ml-1 text-sm">&#9658;</span>
          )}
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-8 sm:bottom-10 z-30 px-6">
        <p className="text-center text-white/85 text-[11px] sm:text-xs mb-4 font-body pointer-events-none">
          Book direct &amp; get the best rates — no hidden fees, just jungle vibes
        </p>
        <BookingBar />
      </div>
    </section>
  );
}
