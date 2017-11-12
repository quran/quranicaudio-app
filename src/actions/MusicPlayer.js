import {
  MUSIC_PLAYER_PLAY_SONG,
  MUSIC_PLAYER_GO_FORWARD,
  MUSIC_PLAYER_GO_BACKWARD,
  MUSIC_PLAYER_SET_SONGS_LIST,
  MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
  MUSIC_PLAYER_MINIMISE
} from './constants';

const songs = songs => ({
  type: MUSIC_PLAYER_SET_SONGS_LIST,
  data: songs
});

const songIndex = songIndex => ({
  type: MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
  data: songIndex
});

export const setPlayingSong = () => {};

export const setSongsList = songsList => (dispatch) => {
  dispatch(songs(songsList));
};

export const setSelectedSongIndex = selectedSongIndex => (dispatch) => {
  dispatch(songIndex(selectedSongIndex));
};

export const minimisePlayer = () => ({
  type: MUSIC_PLAYER_MINIMISE
});
