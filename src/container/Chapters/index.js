import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Chaters extends Component {
  static navigationOptions = {
    title: ({ state }) => `Recitation by ${state.params.name}`
  };
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
