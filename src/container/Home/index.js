import { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { List, ListItem, Button } from 'react-native-elements';
import { baseHeaderStyle } from 'styles/variables';

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

    const list = [
      {
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      }
    ];

    return (
      <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
        <List containerStyle={styles.listStyle}>
          {
            reciters.reciters.map(item => (
              <ListItem
                key={item.id}
                title={item.name}
                leftIcon={{ name: item.icon }}
                onPress={() => navigate('Chapters', { name: item.name, data: item })}
              />
            ))
          }
        </List>
      </ScrollView>
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
  container: {
    flex: 1,
    position: 'relative'
  },
  listStyle: {
    flex: 1,
    width: '100%'
  }
});
