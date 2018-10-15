import { GET_FILES_FAIL, GET_FILES } from './constants';
import { Sentry } from 'react-native-sentry';

export const files = data => ({
  type: GET_FILES,
  data
});

export const loadFilesForReciter = (id) => {
  const url = `https://quranicaudio.com/api/qaris/${id}/audio_files/mp3`;

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(files(data)))
    .catch((error) => {
      Sentry.captureException(error);
      console.warn(error);
      dispatch(files([]));
    });
};
