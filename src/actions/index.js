export { getReciters } from './reciter';
export { getChapters } from './chapters';
export { search, clearSearch } from './search';
export { loadAudio } from './audio';

export const addMessage = data => ({
  type: 'HOME',
  data
});
