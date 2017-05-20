export { getReciters } from './reciter';
export { getChapters } from './chapters';
export { search, clearSearch } from './search';
export { setSongsList, setSelectedSongIndex, setCurrentTime, setIsPlaying } from './MusicPlayer';
export const addMessage = data => ({
  type: 'HOME',
  data
});

