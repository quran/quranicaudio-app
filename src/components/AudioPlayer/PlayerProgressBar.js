import React from 'react';
import { ProgressComponent, seekTo } from 'react-native-track-player';
import Styles from '../../styles';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import { formattedTime } from '../../utils/audio';

export default class PlayerProgressBar extends ProgressComponent {
    state = {
      currentTime: this.state.position,
      sliding: false,
    }

    handleSlidingChange = (value) => {
      const currentTime = value * this.state.duration;
      this.setState({ currentTime, sliding: true });
    }

    handleSlidingComplete = (value) => {
      const newPosition = value * this.state.duration;
      seekTo(newPosition); //eslint-disable-line
      this.setState({ sliding: false });
    }

    render() {
      const { duration, currentTime, position, sliding } = this.state;
      const currentProgress = this.getProgress();
      return (
        <View style={Styles.sliderContainer}>
          <Slider
            onSlidingComplete={this.handleSlidingComplete}
            onValueChange={this.handleSlidingChange}
            minimumTrackTintColor="#2CA4AB"
            style={Styles.slider}
            trackStyle={Styles.sliderTrack}
            thumbStyle={Styles.sliderThumb}
            value={currentProgress}
          />

          <View style={Styles.timeInfo}>
            <Text style={Styles.time}>
              {formattedTime(sliding ? currentTime : position)}
            </Text>
            <Text style={Styles.timeRight}>
              {formattedTime(duration)}
            </Text>
          </View>
        </View>
      );
    }
}
