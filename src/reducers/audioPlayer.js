import {
  AUDIO_PLAYER_SET_SURAHS_LIST,
  AUDIO_PLAYER_SET_SELECTED_SURAH_INDEX,
  AUDIO_PLAYER_MINIMISE,
  UPDATE_IS_PLAYING,
  UPDATE_IS_BACKGROUND_PLAY,
} from '../actions/constants';

const initialState = {
  surahs: [],
  status: 'none',
  minimise: false,
  playing: false,
  isBackgroundPlay: false,
};

export default function surahs(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case AUDIO_PLAYER_SET_SURAHS_LIST:
      return { surahs: data, status: 'success' };
    case AUDIO_PLAYER_SET_SELECTED_SURAH_INDEX:
      return { ...state, surahIndex: data, minimise: false };
    case AUDIO_PLAYER_MINIMISE:
    case UPDATE_IS_PLAYING:
    case UPDATE_IS_BACKGROUND_PLAY:
      return { ...state, ...data };
    default:
      return state;
  }
}
