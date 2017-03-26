import { Component } from 'react';
import {
  Text,
  View
} from 'react-native';


export default class AudioPlayer extends Component {
  render() {
    return (<View {...this.props} style={{ backgroundColor: 'yellow', position: 'absolute', left: 0, right: 0, bottom: 0, height: 50, flex: 1 }}>
      <Text> AUDIO PLAYER GOES HERE </Text>
    </View>);
  }
}
