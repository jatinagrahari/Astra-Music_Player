import React, { useState } from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { IoVolumeHigh, IoVolumeLow, IoVolumeMute, IoList } from 'react-icons/io5';

const VolumeSlider = () => {
  const { volume, setVolume, currentSong } = usePlayer();
  const [previousVolume, setPreviousVolume] = useState(1);

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
    }
  };

  const VolumeIcon = () => {
    if (volume === 0) return <IoVolumeMute className="text-xl" />;
    if (volume < 0.5) return <IoVolumeLow className="text-xl" />;
    return <IoVolumeHigh className="text-xl" />;
  };

  return (
    <div className="flex items-center space-x-4">
      <button 
        disabled={!currentSong} 
        className="text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
      >
        <IoList className="text-xl" />
      </button>

      <div className="hidden sm:flex items-center space-x-2 group">
        <button 
          onClick={toggleMute}
          disabled={!currentSong}
          className="text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <VolumeIcon />
        </button>
        
        <div className="w-24 flex items-center">
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            disabled={!currentSong}
            className="w-full disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(to right, #1db954 ${volume * 100}%, #3f3f46 ${volume * 100}%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeSlider;
