import React from 'react';
import { songs } from '../data/songs';
import SongCard from '../components/SongCard';
import SongList from '../components/SongList';
import { usePlayer } from '../hooks/usePlayer';
import { IoPlay, IoPause } from 'react-icons/io5';

const Home = () => {
  const { currentSong, isPlaying, togglePlay, playSong } = usePlayer();
  const featuredSong = songs[0];
  const isFeaturedPlaying = currentSong?.id === featuredSong.id;

  const handlePlayFeatured = () => {
    if (isFeaturedPlaying) {
      togglePlay();
    } else {
      playSong(featuredSong, songs);
    }
  };

  return (
    <div className="animate-fade-in pb-8">
      {/* Featured Header */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-10 flex items-end p-8">
        <img 
          src={featuredSong.image} 
          alt={featuredSong.title}
          className="absolute inset-0 w-full h-full object-cover filter blur-[2px] brightness-50 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-player-base via-player-base/60 to-transparent"></div>
        
        <div className="relative z-10 flex items-end space-x-6 w-full">
          <img 
            src={featuredSong.image} 
            alt={featuredSong.title}
            className="w-40 h-40 md:w-56 md:h-56 shadow-2xl rounded-md object-cover hidden sm:block"
          />
          <div className="flex flex-col w-full">
            <span className="uppercase text-xs font-bold tracking-widest mb-2 text-white/80">Featured Release</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4 line-clamp-2">
              {featuredSong.title}
            </h1>
            <p className="text-zinc-300 font-medium text-lg mb-6">{featuredSong.artist}</p>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handlePlayFeatured}
                className="w-14 h-14 bg-player-accent rounded-full flex items-center justify-center shadow-lg text-black hover:scale-105 transition-transform"
              >
                {isFeaturedPlaying && isPlaying ? (
                  <IoPause className="text-2xl" />
                ) : (
                  <IoPlay className="text-2xl translate-x-[2px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Grid */}
      <h2 className="text-2xl font-bold text-white mb-6">Made For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} queue={songs} />
        ))}
      </div>

      {/* Top Tracks List */}
      <div className="mt-8">
        <SongList songs={songs.slice(0, 5)} title="Top Tracks" />
      </div>
    </div>
  );
};

export default Home;
