import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles';
import Slider from 'react-native-slider';
import * as Utils from '../utils/audio';

export const PlayButton = props => <Icon
  onPress={props.togglePlay}
  style={Styles.play}
  name={props.playing ? 'ios-pause' : 'ios-play'}
  size={70}
  color="#fff"
/>;

export const ForwardButton = (props) => {
  let forwardButton = null;
  if (
      !props.shuffle &&
      props.songIndex + 1 === props.songs.length
    ) {
    forwardButton = (
      <FontAwesome
        style={Styles.forward}
        name="forward"
        size={25}
        color="#333"
      />
      );
  } else {
    forwardButton = (
      <FontAwesome
        onPress={props.goForward}
        style={Styles.forward}
        name="forward"
        size={25}
        color="#fff"
      />
      );
  }

  return forwardButton;
};


export const BackwardButton = props => (
  <FontAwesome
    onPress={props.goBackward}
    style={Styles.back}
    name="backward"
    size={25}
    color="#fff"
  />
    );

export const VolumeButton = props => (
  <FontAwesome
    onPress={props.toggleVolume}
    style={Styles.volume}
    name={props.muted ? 'volume-off' : 'volume-up'}
    size={18}
    color="#fff"
  />
    );

export const ShuffleButton = props => (
  <FontAwesome
    onPress={props.toggleShuffle}
    style={Styles.shuffle}
    name="random"
    size={18}
    color={props.shuffle ? '#f62976' : '#fff'}
  />
    );

export const DownloadButton = (props) => {
  if (!props.download || props.downloading) {
    return (
      <FontAwesome
        style={Styles.downloadButton}
        name="download"
        size={25}
        color="#333"
      />
    );
  }
  return (
    <FontAwesome
      onPress={props.downloadMusic}
      style={Styles.downloadButton}
      name="download"
      size={25}
      color="#fff"
    />
  );
};

export const SongSlider = props => (
  <View style={Styles.sliderContainer}>
    <Slider
      onSlidingStart={props.onSlidingStart}
      onSlidingComplete={props.onSlidingComplete}
      onValueChange={props.onValueChange}
      minimumTrackTintColor="#fff"
      style={Styles.slider}
      trackStyle={Styles.sliderTrack}
      thumbStyle={Styles.sliderThumb}
      value={props.value}
    />

    <View style={Styles.timeInfo}>
      <Text style={Styles.time}>
        {Utils.formattedTime(props.currentTime)}
      </Text>
      <Text style={Styles.timeRight}>
            -
            {' '}
        {Utils.formattedTime(
              props.songDuration - props.currentTime
            )}
      </Text>
    </View>
  </View>
    );
