import React, { useState, useMemo } from 'react';
import { songs } from '../data/songs';
import SongList from '../components/SongList';
import SongCard from '../components/SongCard';

const Search = () => {
  // In a real app, search query comes from Navbar context or URL params.
  // For this demo, we assume the user just scrolls through "Browse all" 
  // or we can add a local input if we didn't want to use the Navbar one.
  const [query, setQuery] = useState('');

  const filteredSongs = useMemo(() => {
    if (!query) return songs;
    return songs.filter(s => 
      s.title.toLowerCase().includes(query.toLowerCase()) || 
      s.artist.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="animate-fade-in pb-8">
      
      <div className="mb-8 md:hidden">
        <input 
          type="text" 
          placeholder="What do you want to listen to?" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white text-black text-sm rounded-md py-3 px-4 focus:outline-none"
        />
      </div>

      {query ? (
        <>
          <h2 className="text-2xl font-bold text-white mb-6">Top Results</h2>
          <SongList songs={filteredSongs} />
          {filteredSongs.length === 0 && (
            <div className="text-center text-zinc-400 mt-20">
              <p className="text-lg">No results found for "{query}"</p>
              <p className="text-sm mt-2">Please make sure your words are spelled correctly or use less or different keywords.</p>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-white mb-6">Browse All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} queue={songs} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
