import React from 'react';
import AlbumArtwork from './AlbumArtwork';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import VolumeSlider from './VolumeSlider';

const PlayerControls = () => {
  return (
    <div className="h-full w-full flex items-center justify-between px-4">
      {/* Left: Album Artwork & Info */}
      <div className="w-1/3 min-w-[180px]">
        <AlbumArtwork />
      </div>

      {/* Center: Playback Controls & Progress Bar */}
      <div className="w-2/5 max-w-[722px] flex flex-col items-center justify-center">
        <PlaybackControls />
        <ProgressBar />
      </div>

      {/* Right: Volume & Extra Controls */}
      <div className="w-1/3 min-w-[180px] flex justify-end">
        <VolumeSlider />
      </div>
    </div>
  );
};

export default PlayerControls;
