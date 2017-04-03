import { FETCH_CHAPTERS, FETCH_CHAPTERS_FAIL } from '../actions/constants';

export default function chapters(state = { chapters: [], status: 'none' }, action) {
  
  const { type, data } = action;

  switch (type) {
    case FETCH_CHAPTERS:
      return { chapters: data, status: 'success' };
    case FETCH_CHAPTERS_FAIL:
      return { chapters: [], status: 'fail' };
    default:
      return state;
  }
}