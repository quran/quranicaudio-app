import React, { Component } from 'react';
import { Text, View, AppState, Platform } from 'react-native';
import * as Actions from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styles from '../../styles';
import * as Utils from "../../utils/audio"; //eslint-disable-line
import TrackPlayer from 'react-native-track-player';

import {
  ForwardButton,
  BackwardButton,
  PlayButton,
  ShuffleButton,
  VolumeButton,
} from '../../components/PlayerButtons';
import * as Progress from "react-native-progress"; //eslint-disable-line
import PlayerProgressBar from './PlayerProgressBar';

class AudioPlayer extends Component {
  state = {
    muted: false,
    shuffle: false,
    appState: AppState.currentState,
  };

  async componentDidMount() {
    try {
      const { chapters: { chapters, selectedChapter } } = this.props;
      this.props.actions.setItemsList(chapters);
      this.props.actions.setSelectedItemIndex(selectedChapter);
      // configure the Track player
      await this.initTrackPlayer();

      // initialize the player
      const currentItem = chapters[selectedChapter - 1];
      this.initPlayer({ items: chapters, currentItem });
    } catch (error) {
      console.log(error);
    }

    // to handle background/foreground switching
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    const isForeground = this.state.appState.match(/inactive|background/) && nextAppState === 'active';
    this.props.actions.updateIsBackgroundPlay(!isForeground);
    this.setState({ appState: nextAppState });
  }

  initTrackPlayer = async () => {
    // init the player
    await TrackPlayer.setupPlayer();

    // Reset the player tracks, whenever the reciter changes (hence the key={selection.reciter.id}),
    // so we can add the new reciter tracks without overloading the memory.
    // Whenever the key changes, the component will be re-mounted and this fn will be called.
    TrackPlayer.reset();

    // Configuring the player
    TrackPlayer.updateOptions({
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_PLAY_FROM_ID,
        TrackPlayer.CAPABILITY_SEEK_TO
      ],
      stopWithApp: false,
    });
    return true;
  }

  initPlayer = async ({ items, currentItem }) => {
    try {
      // pause the previous item (if any)
      TrackPlayer.pause();

      // convert the items to tracks
      const tracks = Utils.itemsToTracks(items);
      // push all the items to the player
      await TrackPlayer.add(tracks);
      // skip to the current track, then play it
      const currentItemId = `${currentItem.id}`;
      await TrackPlayer.skip(currentItemId);

      TrackPlayer.play();
      this.props.actions.updateIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  randomSongIndex = () => {
    const { chapters: { chapters } } = this.props;
    const maxIndex = chapters.length - 1;
    return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0; //eslint-disable-line
  }

  toggleShuffle = () => {
    this.setState({ shuffle: !this.state.shuffle });
  }

  toggleVolume = () => {
    TrackPlayer.setVolume(this.state.muted ? 1 : 0);
    this.setState({ muted: !this.state.muted });
  }

  togglePlay = () => {
    this.props.player.playing ? TrackPlayer.pause() : TrackPlayer.play(); //eslint-disable-line
    this.props.actions.updateIsPlaying(!this.props.player.playing);
  }

  goForward = () => {
    const { chapters: { chapters, selectedChapter }, selection } = this.props;
    if (selectedChapter === chapters.length) return;
    this.props.actions.setSelectedItemIndex(selectedChapter + 1);
    this.props.actions.selectChapter({ reciter: selection.reciter, chapter: selectedChapter + 1 });
    const currentItem = chapters[selectedChapter];
    TrackPlayer.stop();
    TrackPlayer.skip(`${currentItem.id}`);
    this.props.actions.updateIsPlaying(true);
  }

  goBackward = () => {
    const { chapters: { chapters, selectedChapter }, selection } = this.props;
    if (selectedChapter === 1) return;
    this.props.actions.setSelectedItemIndex(selectedChapter - 1);
    this.props.actions.selectChapter({ reciter: selection.reciter, chapter: selectedChapter - 1 });
    const currentItem = chapters[selectedChapter - 2];
    TrackPlayer.stop();
    TrackPlayer.skip(`${currentItem.id}`);
    this.props.actions.updateIsPlaying(true);
  }

  render() {
    const { chapters: { chapters, selectedChapter }, selection, player: { playing } } = this.props;
    const reciterName = selection.reciter.name;

    const title = chapters[selectedChapter - 1].title;
    const minimised = this.props.minimise;
    return (
      <View style={Styles.container}>
        {minimised && Platform.OS === 'ios' &&
        <PlayButton
          togglePlay={this.togglePlay}
          playing={playing}
          minimised={minimised}
        />}
        <Text style={Styles.songTitle}>
          {title}
        </Text>
        <Text style={Styles.albumTitle}>
          {reciterName}
        </Text>

        <View style={Styles.controls}>
          <ShuffleButton
            shuffle={this.state.shuffle}
            toggleShuffle={this.toggleShuffle}
            disabled={this.props.search}
          />
          <BackwardButton goBackward={this.goBackward} />
          <PlayButton
            togglePlay={this.togglePlay}
            playing={playing}
          />
          <ForwardButton
            chapters={this.props.chapters}
            shuffle={this.state.shuffle}
            chapterIndex={selectedChapter}
            goForward={this.goForward}
          />
          <VolumeButton
            muted={this.state.muted}
            toggleVolume={this.toggleVolume}
          />
        </View>
        <PlayerProgressBar />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

function mapStateToProps(store) {
  return {
    player: store.player,
    searchResults: store.searchResults,
    progreses: store.progreses,
    selection: store.chapters.selection,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
