import React from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { IoHeartOutline } from 'react-icons/io5';

const AlbumArtwork = () => {
  const { currentSong } = usePlayer();

  if (!currentSong) {
    return (
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-zinc-800 rounded shadow-md flex items-center justify-center">
          <IoHeartOutline className="text-zinc-600 text-xl" />
        </div>
        <div className="hidden sm:flex flex-col space-y-2">
          <div className="h-3 w-24 bg-zinc-800 rounded"></div>
          <div className="h-2 w-16 bg-zinc-800 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4 group">
      <div className="w-14 h-14 bg-zinc-800 rounded shadow-md overflow-hidden flex-shrink-0">
        <img 
          src={currentSong.image} 
          alt={currentSong.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="hidden sm:flex flex-col truncate">
        <span className="text-sm font-semibold text-white truncate hover:underline cursor-pointer">
          {currentSong.title}
        </span>
        <span className="text-xs text-zinc-400 truncate hover:underline hover:text-white cursor-pointer">
          {currentSong.artist}
        </span>
      </div>
      <button className="hidden md:flex ml-4 text-zinc-400 hover:text-white transition-colors">
        <IoHeartOutline className="text-xl" />
      </button>
    </div>
  );
};

export default AlbumArtwork;
