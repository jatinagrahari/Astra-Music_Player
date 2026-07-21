import React from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { IoPlay, IoPause } from 'react-icons/io5';

const SongCard = ({ song, queue }) => {
  const { currentSong, isPlaying, togglePlay, playSong } = usePlayer();

  const isCurrentSong = currentSong?.id === song.id;

  const handlePlayClick = () => {
    if (isCurrentSong) {
      togglePlay();
    } else {
      playSong(song, queue);
    }
  };

  return (
    <div className="bg-player-highlight/20 hover:bg-player-highlight/60 p-4 rounded-lg transition-colors group cursor-pointer">
      <div className="relative w-full aspect-square mb-4 shadow-lg rounded-md overflow-hidden bg-zinc-800">
        <img 
          src={song.image} 
          alt={song.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <button 
          onClick={handlePlayClick}
          className={`absolute bottom-2 right-2 w-12 h-12 bg-player-accent rounded-full flex items-center justify-center shadow-xl text-black hover:scale-105 transition-all duration-300 ${isCurrentSong ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
        >
          {isCurrentSong && isPlaying ? (
            <IoPause className="text-2xl" />
          ) : (
            <IoPlay className="text-2xl translate-x-[2px]" />
          )}
        </button>
      </div>
      
      <h3 className="text-white font-semibold truncate mb-1">{song.title}</h3>
      <p className="text-zinc-400 text-sm truncate">{song.artist}</p>
    </div>
  );
};

export default SongCard;
