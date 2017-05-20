import {
    MUSIC_PLAYER_SET_SONGS_LIST,
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
    MUSIC_PLAYER_SET_CURRENT_TIME,
    MUSIC_PLAYER_SET_IS_PLAYING
} from '../actions/constants';

export default function songs(state = { songs: [], status: 'none' }, action) {
    const { type, data } = action;
    switch (type) {
        case MUSIC_PLAYER_SET_SONGS_LIST:
            return { songs: data, status: 'success' };
        case MUSIC_PLAYER_SET_SELECTED_SONG_INDEX:
            return { ...state, songIndex: data, isPlaying: false };
        case MUSIC_PLAYER_SET_CURRENT_TIME:
            return { ...state, currentTime: data, isPlaying: false };
        case MUSIC_PLAYER_SET_IS_PLAYING:
            return { ...state, isPlaying: data };
        default:
            return state;
    }
}
