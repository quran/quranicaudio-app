import { SEARCH_CLEAR, SEARCH } from './constants';

export function clearSearch() {
  return {
    type: SEARCH_CLEAR
  };
}

export function search(input) {
  return {
    type: SEARCH,
    input
  };
}
