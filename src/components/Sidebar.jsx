import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome, GoHomeFill, GoSearch } from 'react-icons/go';
import { VscLibrary } from 'react-icons/vsc';
import { IoMusicalNotesOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col py-6 px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-2 mb-8 text-white">
        <IoMusicalNotesOutline className="text-3xl text-player-accent" />
        <span className="text-xl font-bold tracking-tight">Astra Music</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center space-x-4 px-2 py-2 rounded-md transition-colors ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? <GoHomeFill className="text-2xl" /> : <GoHome className="text-2xl" />}
              <span className="text-sm font-semibold">Home</span>
            </>
          )}
        </NavLink>
        <NavLink 
          to="/search" 
          className={({ isActive }) => 
            `flex items-center space-x-4 px-2 py-2 rounded-md transition-colors ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`
          }
        >
          {({ isActive }) => (
            <>
              <GoSearch className={`text-2xl ${isActive ? 'stroke-current' : ''}`} />
              <span className="text-sm font-semibold">Search</span>
            </>
          )}
        </NavLink>
        <NavLink 
          to="/library" 
          className={({ isActive }) => 
            `flex items-center space-x-4 px-2 py-2 rounded-md transition-colors ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`
          }
        >
          {({ isActive }) => (
            <>
              <VscLibrary className="text-2xl" />
              <span className="text-sm font-semibold">Your Library</span>
            </>
          )}
        </NavLink>
      </nav>

      {/* Divider */}
      <div className="my-6 border-t border-zinc-800 mx-2"></div>

      {/* Playlist Section placeholder */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-3">
        <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Playlists</p>
        <p className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors truncate">NCS Releases</p>
        <p className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors truncate">Gaming Mix 2026</p>
        <p className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors truncate">Happy Hits</p>
      </div>
    </div>
  );
};

export default Sidebar;
