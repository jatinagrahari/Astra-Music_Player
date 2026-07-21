import React from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { IoPlay, IoPause } from 'react-icons/io5';

const SongList = ({ songs, title }) => {
  const { currentSong, isPlaying, togglePlay, playSong } = usePlayer();

  if (!songs || songs.length === 0) return null;

  return (
    <div className="mt-8">
      {title && <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}
      
      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 border-b border-zinc-800 text-sm text-zinc-400 font-medium mb-4">
          <div className="w-8 text-center">#</div>
          <div>Title</div>
          <div className="hidden sm:block">Album</div>
          <div className="w-12 text-right">Dur</div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col">
          {songs.map((song, index) => {
            const isCurrentSong = currentSong?.id === song.id;

            const handlePlay = () => {
              if (isCurrentSong) {
                togglePlay();
              } else {
                playSong(song, songs);
              }
            };

            return (
              <div 
                key={song.id}
                onDoubleClick={handlePlay}
                className={`grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 items-center rounded-md hover:bg-white/10 transition-colors group cursor-pointer ${isCurrentSong ? 'bg-white/5' : ''}`}
              >
                {/* Index / Play Button */}
                <div className="w-8 flex justify-center text-zinc-400">
                  <div className="group-hover:hidden" style={{ display: isCurrentSong ? 'none' : 'block' }}>
                    {index + 1}
                  </div>
                  <button 
                    onClick={handlePlay}
                    className="text-white hidden group-hover:block"
                    style={{ display: isCurrentSong ? 'block' : '' }}
                  >
                    {isCurrentSong && isPlaying ? (
                      <IoPause className="text-player-accent text-lg" />
                    ) : (
                      <IoPlay className={`${isCurrentSong ? 'text-player-accent' : 'text-white'} text-lg`} />
                    )}
                  </button>
                </div>

                {/* Title & Artist */}
                <div className="flex items-center space-x-3 truncate">
                  <img src={song.image} alt={song.title} className="w-10 h-10 rounded bg-zinc-800 object-cover flex-shrink-0" />
                  <div className="flex flex-col truncate">
                    <span className={`text-base truncate ${isCurrentSong ? 'text-player-accent font-medium' : 'text-white'}`}>
                      {song.title}
                    </span>
                    <span className="text-sm text-zinc-400 truncate hover:underline">{song.artist}</span>
                  </div>
                </div>

                {/* Album */}
                <div className="hidden sm:flex items-center truncate text-sm text-zinc-400 hover:underline">
                  {song.album || song.artist}
                </div>

                {/* Duration Placeholder (Backend data doesn't have exact duration initially) */}
                <div className="w-12 text-right text-sm text-zinc-400">
                  3:45
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SongList;
