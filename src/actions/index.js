import { HOME, FETCH_RECITERS } from './constants';

export const addMessage = data => ({
  type: HOME,
  data
});

export const reciters = data => ({
  type: FETCH_RECITERS,
  data
});

export const getReciters = () => {
  const url = 'https://quranicaudio.com/api/qaris';

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(reciters(data)))
    .catch(error => console.warn(error));
};
