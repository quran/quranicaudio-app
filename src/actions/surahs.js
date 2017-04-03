import { FETCH_SURAHS } from './constants';

export const surahs = data => ({
  type: FETCH_SURAHS,
  data
});

export const getSurahs = () => {
  const url = 'https://quranicaudio.com/api/surahs';

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => {dispatch(surahs(data))})
    .catch(error => console.warn(error));
};