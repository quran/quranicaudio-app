import { FETCH_CHAPTERS, FETCH_CHAPTERS_FAIL, SELECT_CHAPTER_TO_PLAY } from '../actions/constants';

export default function chapters(state = { chapters: [], status: 'none', selection: {} }, action) {
  const { type, data } = action;

  switch (type) {
    case FETCH_CHAPTERS:
      return { ...state, chapters: data, status: 'success' };
    case FETCH_CHAPTERS_FAIL:
      return { ...state, chapters: [], status: 'fail' };
    case SELECT_CHAPTER_TO_PLAY:
      return { ...state, selection: data };
    default:
      return state;
  }
}
