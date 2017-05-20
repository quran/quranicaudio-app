import { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/index';

/**
 * Universal audio player
 */
export class AudioPlayer extends Component {
  render() {
    return (<View {...this.props} style={{ backgroundColor: 'yellow', position: 'absolute', left: 0, right: 0, bottom: 0, height: 50, flex: 1 }}>
      <Text> AUDIO PLAYER GOES HERE {this.props.songIndex}</Text>
    </View>);
  }
}

/**
 *
 * @param state
 * @return {{reciters: (*|Array|reciters|Function), main, search, songs: (*|Array), songIndex: *, currentTime: (*|number|Number), playing: boolean}}
 */
function mapStateToProps(state) {
    return {
        reciters: state.reciters.reciters,
        main: state.main,
        search: state.search,
        songs: state.songs.songs,
        songIndex: state.songs.songIndex,
        currentTime: state.songs.currentTime,
        playing: state.songs.isPlaying
    };
}

/**
 * 
 * @param dispatch
 * @return {{actions: (A|B|M|N), dispatch: *}}
 */
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Actions, dispatch), dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);