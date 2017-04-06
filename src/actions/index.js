export { getReciters } from './reciter';
export { getChapters } from './chapters';
export { search, clearSearch } from './search';
export const addMessage = data => ({
  type: 'HOME',
  data
});

