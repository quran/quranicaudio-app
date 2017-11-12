export { getReciters } from './reciter';
export { getChapters, selectChapter } from './chapters';
export { search, clearSearch } from './search';
export { loadFilesForReciter } from './files';
export { setSongsList, setSelectedSongIndex, minimisePlayer } from './MusicPlayer';
export const addMessage = data => ({
  type: 'HOME',
  data
});

