import { FETCH_FILES } from './constants';

const files = data => ({
  type: FETCH_FILES,
  data
});

export const getFiles = (id) => {
  const url = `https://quranicaudio.com/api/qaris/${id}/audio_files/mp3`;

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(files(data)))
    .catch(error => console.warn(error));
};
