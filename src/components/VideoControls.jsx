import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Pause, Play, Menu } from "lucide-react";

const VideoControls = ({ videoRef }) => {
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
    <div className="fixed bottom-8 right-8 z-300 flex gap-3 pointer-events-auto">
      {/* Play/Pause Button */}
      <motion.button
        onClick={togglePlayPause}
        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-gray-900" />
        ) : (
          <Play className="w-5 h-5 text-gray-900 ml-0.5" />
        )}
      </motion.button>

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
