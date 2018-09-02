import TrackPlayer from 'react-native-track-player';
import { updateIsPlaying, setSelectedItemIndex } from './actions/AudioPlayer';
import { selectChapter } from './actions';


module.exports = async (store, data) => {
  console.log("TRACK EVENT DATA", data);
  if (data.type == 'playback-state') {
    // Update the UI with the new state
    // STATE_PAUSED // STATE_PLAYING // STATE_BUFFERING // STATE_STOPPED

  } else if (data.type === 'remote-play') {
    TrackPlayer.play();
    store.dispatch(updateIsPlaying(true));

  } else if (data.type === 'remote-pause') {
    TrackPlayer.pause();
    store.dispatch(updateIsPlaying(false));
  } else if (data.type === 'remote-jump-forward') {
    const currentPosition = await TrackPlayer.getPosition();
    TrackPlayer.seekTo(currentPosition + data.interval);
  } else if (data.type === 'remote-jump-backward') {
    const currentPosition = await TrackPlayer.getPosition();
    TrackPlayer.seekTo(currentPosition - data.interval);
  } else if (data.type === 'remote-stop') {
    TrackPlayer.stop();
    store.dispatch(updateIsPlaying(false));
  } else if (data.type === 'remote-skip') {
    store.dispatch(updateIsPlaying(false));
    TrackPlayer.stop();
    await TrackPlayer.skip(data.id);
    store.dispatch(updateIsPlaying(true));
  } else if (data.type === 'remote-next') {
    store.dispatch(updateIsPlaying(false));
    TrackPlayer.stop();
    TrackPlayer.skipToNext().then(() => store.dispatch(updateIsPlaying(true)));
  } else if (data.type === 'remote-previous') {
    store.dispatch(updateIsPlaying(false));
    TrackPlayer.stop();
    TrackPlayer.skipToPrevious().then(() => store.dispatch(updateIsPlaying(true)));
  } else if (data.type === 'remote-seek') {
    TrackPlayer.seekTo(data.position);
  } else if (data.type === 'remote-duck') {
    data.ducking ? TrackPlayer.pause() : TrackPlayer.play(); // eslint-disable-line
    store.dispatch(updateIsPlaying(data.ducking));
  } else if (data.type === 'remote-play-id') {
    store.dispatch(updateIsPlaying(false));
    TrackPlayer.stop();
    TrackPlayer.skip(data.id).then(() => store.dispatch(updateIsPlaying(true)));
  } else if (data.type === 'playback-track-changed') {
    const { chapters: { selection }, player } = store.getState();
    const { isBackgroundPlay } = player;
    if (!isBackgroundPlay) return;

    store.dispatch(setSelectedItemIndex(data.nextTrack));
    store.dispatch(selectChapter({ reciter: selection.reciter, chapter: data.nextTrack }));
  }
};
