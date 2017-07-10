import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles';
import Slider from 'react-native-slider';
import * as Utils from '../utils/audio';
import styled from 'styled-components/native';

export const PlayButton = props =>
  <Icon
    onPress={props.togglePlay}
    style={Styles.play}
    name={props.playing ? 'ios-pause' : 'ios-play'}
    size={70}
    color="#fff"
  />;

export const ForwardButton = (props) => {
  let forwardButton = null;
  if (!props.shuffle && props.songIndex + 1 === props.songs.length) {
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

export const BackwardButton = props =>
  <FontAwesome
    onPress={props.goBackward}
    style={Styles.back}
    name="backward"
    size={25}
    color="#fff"
  />;

export const VolumeButton = props =>
  <FontAwesome
    onPress={props.toggleVolume}
    style={Styles.volume}
    name={props.muted ? 'volume-off' : 'volume-up'}
    size={18}
    color="#fff"
  />;

const ShuffleIcon = styled(FontAwesome)`
  margin-top: 26px;
  `;

export const ShuffleButton = props =>
  <ShuffleIcon
    onPress={props.toggleShuffle}
    name="random"
    size={18}
    color={props.shuffle ? '#f62976' : '#fff'}
  />;

export const SongSlider = (props) => {
  const currentTime = Utils.secondTime(props.currentTime) || Utils.constants.defaultTime;
  const durationTime = Utils.secondTime(props.songDuration) || Utils.constants.defaultTime;
  return (
    <View style={Styles.sliderContainer}>
      <Slider
        onSlidingStart={props.handleSlidingStart}
        onSlidingComplete={props.handleSlidingComplete}
        onValueChange={props.onChange}
        minimumTrackTintColor="#2CA4AB"
        style={Styles.slider}
        trackStyle={Styles.sliderTrack}
        thumbStyle={Styles.sliderThumb}
        value={props.value}
      />

      <View style={Styles.timeInfo}>
        <Text style={Styles.time}>
          {currentTime}
        </Text>
        <Text style={Styles.timeRight}>
          {durationTime}
        </Text>
      </View>
    </View>);
};

