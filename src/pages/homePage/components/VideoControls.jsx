import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Pause, Play, Menu } from "lucide-react";

const VideoControls = ({ videoRef, className = "", isDesktop = true }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
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
    <div className={`flex gap-3 pointer-events-auto ${className}`}>
      {/* Play/Pause Button */}
      {isDesktop ? (
        <motion.button
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors border-2 border-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </motion.button>
      ) : (
        <button
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>
      )}

      {/* Menu Button */}
      {/* <motion.button
        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu className="w-5 h-5 text-gray-900" />
      </motion.button> */}
    </div>
  );
};

export default VideoControls;
