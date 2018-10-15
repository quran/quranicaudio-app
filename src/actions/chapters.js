import { FETCH_CHAPTERS, SELECT_CHAPTER_TO_PLAY } from './constants';
import { Sentry } from 'react-native-sentry';

export const chapters = data => ({
  type: FETCH_CHAPTERS,
  data
});

export const selectChapter = data => ({
  type: SELECT_CHAPTER_TO_PLAY,
  data
});

export const getChapters = () => {
  const url = 'https://quranicaudio.com/api/surahs';

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(chapters(data)))
    .catch((error) => {
      Sentry.captureException(error);
      console.warn(error);
      dispatch(chapters([]));
    });
};
