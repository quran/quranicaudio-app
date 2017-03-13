import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';

export class Home extends Component {
  render() {
    const { actions, main } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => actions.addMessage('Quran')}>
          Welcome to QuranicAudio!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js {main.text}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    main: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
