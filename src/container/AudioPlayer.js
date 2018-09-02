import React from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import styled from 'styled-components/native';

import AudioPlayer from '../components/AudioPlayer';
import perpareReciterSurahsList from '../utils/perpareReciterSurahsList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const View = styled.View`
  height: ${props => (props.minimise ? '40' : '220')}px;
  width: 100%;
  background: #000;
  borderTopColor: #2ca4ab;
  borderTopWidth: 5px;
`;
const AnimatedView = Animated.createAnimatedComponent(View);

const ViewCloseIcon = styled.TouchableOpacity`
  background: #2ca4ab;
  width: 30px;
  height: 30px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  top: -4px;
`;

const Chevron = styled(FontAwesome)`
 transform: rotate(${props => (props.directionUp ? '180' : '0')}deg);
`;

class AudioPlayerContainer extends React.Component {
  render() {
    const { chapters, player, actions } = this.props;
    const selection = chapters.selection;
    if (selection && selection.chapter) {
      return (
        <AnimatedView minimise={player.minimise}>
          <ViewCloseIcon onPress={() => actions.minimisePlayer()}>
            <Chevron
              name="chevron-down"
              color="white"
              directionUp={player.minimise}
            />
          </ViewCloseIcon>
          <AudioPlayer
            minimise={player.minimise}
            key={selection.chapter}
            chapters={perpareReciterSurahsList(
              selection.reciter,
              chapters.chapters,
              selection.chapter
            )}
          />
        </AnimatedView>
      );
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters,
    reciters: state.reciters.reciters,
    main: state.main,
    player: state.player,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(
  AudioPlayerContainer
);
