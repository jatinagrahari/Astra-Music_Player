import React, { createContext, useState, useRef, useEffect } from 'react';
import { songs as librarySongs } from '../data/songs';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  
  const [currentSong, setCurrentSong] = useState(null);
  const [queue, setQueue] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // 'off', 'all', 'one'

  // Setup audio element listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => playNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong, repeatMode, queue, isShuffle]);

  // Handle Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  // Handle Volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Player Actions
  const playSong = (song, newQueue = null) => {
    setCurrentSong(song);
    if (newQueue) setQueue(newQueue);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    } else if (queue.length > 0) {
      playSong(queue[0]);
    } else if (librarySongs.length > 0) {
      playSong(librarySongs[0], librarySongs);
    }
  };

  const playNext = () => {
    if (repeatMode === 'one') {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    if (queue.length === 0) return;

    const currentIndex = queue.findIndex(s => s.id === currentSong?.id);
    let nextIndex = currentIndex + 1;

    if (isShuffle) {
      let randomIndex = Math.floor(Math.random() * queue.length);
      while (randomIndex === currentIndex && queue.length > 1) {
        randomIndex = Math.floor(Math.random() * queue.length);
      }
      nextIndex = randomIndex;
    }

    if (nextIndex >= queue.length) {
      if (repeatMode === 'all') {
        playSong(queue[0]);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    } else {
      playSong(queue[nextIndex]);
    }
  };

  const playPrev = () => {
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    if (queue.length === 0) return;

    const currentIndex = queue.findIndex(s => s.id === currentSong?.id);
    let prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      if (repeatMode === 'all') {
        prevIndex = queue.length - 1;
      } else {
        prevIndex = 0;
      }
    }
    
    playSong(queue[prevIndex]);
  };

  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleShuffle = () => setIsShuffle(!isShuffle);
  
  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one'];
    const nextIndex = (modes.indexOf(repeatMode) + 1) % modes.length;
    setRepeatMode(modes[nextIndex]);
  };

  const value = {
    currentSong,
    queue,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffle,
    repeatMode,
    playSong,
    togglePlay,
    playNext,
    playPrev,
    seek,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    setQueue
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <audio 
        ref={audioRef} 
        src={currentSong ? currentSong.src : ''} 
        preload="metadata"
      />
    </PlayerContext.Provider>
  );
};
