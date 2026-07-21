import React from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { 
  IoPlayCircle, 
  IoPauseCircle, 
  IoPlaySkipBack, 
  IoPlaySkipForward, 
  IoShuffle, 
  IoRepeat 
} from 'react-icons/io5';

const PlaybackControls = () => {
  const { 
    isPlaying, 
    togglePlay, 
    playNext, 
    playPrev, 
    isShuffle, 
    toggleShuffle, 
    repeatMode, 
    toggleRepeat,
    currentSong 
  } = usePlayer();

  const getRepeatIconColor = () => {
    if (repeatMode === 'off') return 'text-zinc-400 hover:text-white';
    return 'text-player-accent relative after:content-[""] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-player-accent after:rounded-full';
  };

  return (
    <div className="flex items-center space-x-4 md:space-x-6 mb-2">
      {/* Shuffle */}
      <button 
        onClick={toggleShuffle} 
        disabled={!currentSong}
        className={`hidden sm:block transition-colors ${isShuffle ? 'text-player-accent' : 'text-zinc-400 hover:text-white'} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <IoShuffle className="text-xl" />
      </button>

      {/* Previous */}
      <button 
        onClick={playPrev} 
        disabled={!currentSong}
        className="text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoPlaySkipBack className="text-xl md:text-2xl" />
      </button>

      {/* Play/Pause */}
      <button 
        onClick={togglePlay}
        className="text-white hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <IoPauseCircle className="text-[40px] md:text-[44px]" />
        ) : (
          <IoPlayCircle className="text-[40px] md:text-[44px]" />
        )}
      </button>

      {/* Next */}
      <button 
        onClick={playNext} 
        disabled={!currentSong}
        className="text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoPlaySkipForward className="text-xl md:text-2xl" />
      </button>

      {/* Repeat */}
      <button 
        onClick={toggleRepeat} 
        disabled={!currentSong}
        className={`hidden sm:block transition-colors relative ${getRepeatIconColor()} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <IoRepeat className="text-xl" />
        {repeatMode === 'one' && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold bg-player-base rounded-full w-3 h-3 flex items-center justify-center">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default PlaybackControls;
