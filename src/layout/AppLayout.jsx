import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PlayerControls from '../components/PlayerControls';

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-black overflow-hidden">
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar for Desktop */}
        <div className="hidden md:flex w-64 flex-col bg-player-base">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-player-base relative">
          <div className="absolute inset-0 bg-gradient-to-b from-player-surface to-player-base opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col h-full rounded-tl-lg bg-player-surface overflow-hidden">
            <Navbar />
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Player controls */}
      <div className="h-24 bg-player-base border-t border-zinc-900 z-50">
        <PlayerControls />
      </div>

    </div>
  );
};

export default AppLayout;
