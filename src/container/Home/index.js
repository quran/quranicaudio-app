import { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { Button } from 'react-native-elements';
import { baseHeaderStyle } from '../../styles/variables';

export class Home extends Component {
  static navigationOptions = {
    title: 'QuranicAudio',
    header: ({ state, setParams }, defaultHeader) => ({
      ...defaultHeader,
      ...baseHeaderStyle
    })
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.getReciters();
  }

  render() {
    const { actions, main, navigation, reciters } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => actions.addMessage('Quran')}>
          Welcome to QuranicAudio!
        </Text>
        <Text style={styles.instructions}>
          Listen to some quran from QuranicAudio.com!
        </Text>

        <ScrollView
          automaticallyAdjustContentInsets={false}
          bounces={false}
          style={[styles.scrollView, styles.horizontalScrollView]}
        >
          {reciters.reciters.map(item => <Button
            key={item.id}
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => navigate('Chapters', { name: item.name, data: item })}
            title={item.name}
          />)}
        </ScrollView>
        <Text style={styles.instructions} />

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
    reciters: state.reciters,
    main: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  scrollView: {
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
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
