import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname === '/search';

  return (
    <div className="h-16 flex items-center justify-between px-6 sticky top-0 z-20 bg-player-surface/80 backdrop-blur-md">
      {/* Navigation History */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center bg-black/60 rounded-full text-zinc-400 hover:text-white transition-colors"
        >
          <IoChevronBack className="text-xl" />
        </button>
        <button 
          onClick={() => navigate(1)}
          className="w-8 h-8 flex items-center justify-center bg-black/60 rounded-full text-zinc-400 hover:text-white transition-colors"
        >
          <IoChevronForward className="text-xl" />
        </button>
        
        {/* Optional Search Input visible only on Search Page */}
        {isSearchPage && (
          <div className="ml-4 relative">
            <input 
              type="text" 
              placeholder="What do you want to listen to?" 
              className="bg-white text-black text-sm rounded-full py-2 pl-10 pr-4 w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-white border-2 border-transparent transition-all"
            />
            <div className="absolute left-3 top-2.5">
              <svg className="w-5 h-5 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.3483 14.7949 20.2845 12.7152 20.2845 10.5579C20.2845 5.41887 16.0583 1.27893 10.8775 1.27893H10.533ZM3.12598 10.5579C3.12598 6.45369 6.3683 3.27893 10.533 3.27893C14.6976 3.27893 17.94 6.45369 17.94 10.5579C17.94 14.6621 14.6976 17.8369 10.533 17.8369C6.3683 17.8369 3.12598 14.6621 3.12598 10.5579Z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* User Profile */}
      <div className="flex items-center">
        <button className="flex items-center space-x-2 bg-black/60 hover:bg-zinc-800 rounded-full py-1 pr-2 pl-1 transition-colors">
          <div className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          </div>
          <span className="text-sm font-semibold text-white">Jatin</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
