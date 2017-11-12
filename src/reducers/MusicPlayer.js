import {
  MUSIC_PLAYER_SET_SONGS_LIST,
  MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
  MUSIC_PLAYER_MINIMISE
} from '../actions/constants';

export default function songs(state = { songs: [], status: 'none', minimise: false }, action) {
  const { type, data } = action;
  switch (type) {
    case MUSIC_PLAYER_SET_SONGS_LIST:
      return { songs: data, status: 'success' };
    case MUSIC_PLAYER_SET_SELECTED_SONG_INDEX:
      return { ...state, songIndex: data, minimise: false };
    case MUSIC_PLAYER_MINIMISE:
      return { ...state, minimise: !state.minimise };
    default:
      return state;
  }
}
