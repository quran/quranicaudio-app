export { getReciters } from './reciter';
export { getChapters } from './chapters';
export { getSurahs } from './surahs';
export { search, clearSearch } from './search';
export const addMessage = data => ({
  type: 'HOME',
  data
});

