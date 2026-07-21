import React from 'react';
import { songs } from '../data/songs';
import SongList from '../components/SongList';
import { usePlayer } from '../hooks/usePlayer';
import { IoPlay, IoPause } from 'react-icons/io5';

const Library = () => {
  const { currentSong, isPlaying, togglePlay, playSong } = usePlayer();
  const librarySongs = songs; // Mock library

  const isLibraryPlaying = librarySongs.some(s => s.id === currentSong?.id);

  const handlePlayLibrary = () => {
    if (isLibraryPlaying) {
      togglePlay();
    } else {
      playSong(librarySongs[0], librarySongs);
    }
  };

  return (
    <div className="animate-fade-in pb-8">
      {/* Header */}
      <div className="flex items-end space-x-6 mb-10 mt-4">
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-indigo-600 to-blue-900 rounded-md shadow-2xl flex items-center justify-center">
          <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-xs font-bold tracking-widest mb-2 text-white/80">Playlist</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            Liked Songs
          </h1>
          <p className="text-zinc-300 font-medium text-sm">
            Jatin • {librarySongs.length} songs
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-6 mb-6 px-4">
        <button 
          onClick={handlePlayLibrary}
          className="w-14 h-14 bg-player-accent rounded-full flex items-center justify-center shadow-lg text-black hover:scale-105 transition-transform"
        >
          {isLibraryPlaying && isPlaying ? (
            <IoPause className="text-2xl" />
          ) : (
            <IoPlay className="text-2xl translate-x-[2px]" />
          )}
        </button>
      </div>

      {/* Song List */}
      <SongList songs={librarySongs} />
    </div>
  );
};

export default Library;
