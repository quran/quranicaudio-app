export { getReciters } from './reciter';
export { getChapters } from './chapters';
export { search, clearSearch } from './search';
export { getFiles } from './files';
export const addMessage = data => ({
  type: 'HOME',
  data
});

