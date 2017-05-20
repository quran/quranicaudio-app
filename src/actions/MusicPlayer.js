import {
    MUSIC_PLAYER_PLAY_SONG,
    MUSIC_PLAYER_GO_FORWARD,
    MUSIC_PLAYER_GO_BACKWARD,
    MUSIC_PLAYER_SET_SONGS_LIST,
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
    MUSIC_PLAYER_SET_CURRENT_TIME
} from './constants';

const songs = songs => ({
    type: MUSIC_PLAYER_SET_SONGS_LIST,
    data: songs
});

const songIndex = songIndex => ({
    type: MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
    data: songIndex
});

const currentTime = currentTime => ({
    type : MUSIC_PLAYER_SET_CURRENT_TIME,
    data: currentTime
});

export const setPlayingSong = () => {

}

export const setSongsList = (songsList)=> {
    return (dispatch) => {
        dispatch(songs(songsList));
    }
}


export const setSelectedSongIndex = (selectedSongIndex) => {
    return (dispatch) => {
        dispatch(songIndex(selectedSongIndex));
    }
}

export const setCurrentTime = (updatedCurrentTime) => {
    console.log("hereeee");
    return (dispatch) => {
        dispatch(currentTime(updatedCurrentTime));
    }
}