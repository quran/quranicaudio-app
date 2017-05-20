import {
    MUSIC_PLAYER_SET_SONGS_LIST,
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
    MUSIC_PLAYER_SET_CURRENT_TIME
} from '../actions/constants';

export default function songs(state = { songs: [], status: 'none' }, action) {
    const { type, data } = action;
    switch (type) {
        case MUSIC_PLAYER_SET_SONGS_LIST:
            return { songs: data, status: 'success' };
        case MUSIC_PLAYER_SET_SELECTED_SONG_INDEX:
            return { ...state, songIndex: data };
        case MUSIC_PLAYER_SET_CURRENT_TIME:
            console.log(data);
            return { ...state, currentTime: data };
        default:
            return state;
    }
}
