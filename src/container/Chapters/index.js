import { Component } from 'react';
import { Text, View } from 'react-native';

export default class Chaters extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.name}`
  };
  render() {
    const data = this.props.navigation.state.params.data;
    return (
      <View>
        <Text>{JSON.stringify(data)} </Text>
      </View>
    );
  }
}
