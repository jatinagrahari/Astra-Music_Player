import React, { useState, useEffect } from 'react';
import { usePlayer } from '../hooks/usePlayer';

const ProgressBar = () => {
  const { currentTime, duration, seek, currentSong } = usePlayer();
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  // Sync seekValue with actual time when not interacting
  useEffect(() => {
    if (!isSeeking) {
      setSeekValue(currentTime);
    }
  }, [currentTime, isSeeking]);

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeekChange = (e) => {
    setSeekValue(parseFloat(e.target.value));
  };

  const handleSeekCommit = () => {
    seek(seekValue);
    setIsSeeking(false);
  };

  const progressPercent = duration ? (seekValue / duration) * 100 : 0;

  return (
    <div className="w-full flex items-center justify-center space-x-2 text-xs text-zinc-400 font-mono group">
      <span>{formatTime(seekValue)}</span>
      
      <div className="flex-1 max-w-full relative h-1 flex items-center">
        <input 
          type="range" 
          min="0" 
          max={duration || 100} 
          value={seekValue}
          onMouseDown={() => setIsSeeking(true)}
          onChange={handleSeekChange}
          onMouseUp={handleSeekCommit}
          onTouchStart={() => setIsSeeking(true)}
          onTouchEnd={handleSeekCommit}
          disabled={!currentSong}
          className="absolute z-10 w-full disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(to right, #1db954 ${progressPercent}%, #3f3f46 ${progressPercent}%)`
          }}
        />
      </div>

      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
