import {
    MUSIC_PLAYER_SET_SONGS_LIST,
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX
} from '../actions/constants';

export default function songs(state = { songs: [], status: 'none' }, action) {
    const { type, data } = action;
    switch (type) {
        case MUSIC_PLAYER_SET_SONGS_LIST:
            return { songs: data, status: 'success' };
        case MUSIC_PLAYER_SET_SELECTED_SONG_INDEX:
            return { ...state, songIndex: data };
        default:
            return state;
    }
}
