import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { Button } from 'react-native-elements';

export class Home extends Component {
  static navigationOptions = {
    title: 'QuranicAudio',
  };

  render() {
    const { actions, main, navigation } = this.props;
    const { navigate } = navigation;
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

        <Button
          icon={{ name: 'user', type: 'font-awesome' }}
          onPress={() => navigate('Chapters', { name: 'Abdullah Awad al-Juhani' })}
          title="Abdullah Awad al-Juhani"
        />
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
