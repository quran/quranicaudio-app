import {
  AUDIO_PLAYER_SET_SURAHS_LIST,
  AUDIO_PLAYER_SET_SELECTED_SURAH_INDEX,
  AUDIO_PLAYER_MINIMISE,
  UPDATE_IS_PLAYING,
  UPDATE_IS_BACKGROUND_PLAY,
} from './constants';

const surahs = list => ({
  type: AUDIO_PLAYER_SET_SURAHS_LIST,
  data: list
});

const surahIndex = index => ({
  type: AUDIO_PLAYER_SET_SELECTED_SURAH_INDEX,
  data: index
});

export const setPlayingSurah = () => {};

export const setItemsList = surahsList => (dispatch) => {
  dispatch(surahs(surahsList));
};

export const setSelectedItemIndex = selectedItemIndex => (dispatch) => {
  dispatch(surahIndex(selectedItemIndex));
};

export const minimisePlayer = (minimise = false) => ({
  type: AUDIO_PLAYER_MINIMISE,
  data: { minimise }
});

export const updateIsPlaying = (playing = false) => ({
  type: UPDATE_IS_PLAYING,
  data: { playing }
});

export const updateIsBackgroundPlay = (isBackgroundPlay = false) => ({
  type: UPDATE_IS_BACKGROUND_PLAY,
  data: { isBackgroundPlay }
});
