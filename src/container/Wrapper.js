import { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';

// components
import AudioPlayer from '../components/AudioPlayer';

export class Wrapper extends Component {
  static navigationOptions = {
    title: 'Quranic Audio'
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    const { audio } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
        <AudioPlayer
          data={{
            chapters: audio.chapters,
            selected_chapter: audio.selected_chapter
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    reciters: state.reciters.reciters,
    main: state.main,
    audio: state.audio,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
