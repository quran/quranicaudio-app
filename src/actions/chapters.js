import { FETCH_CHAPTERS } from './constants';

export const chapters = data => ({
  type: FETCH_CHAPTERS,
  data
});

export const getChapters = () => {
  const url = 'https://quranicaudio.com/api/sections';

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(chapters(data)))
    .catch(error => console.warn(error));
};