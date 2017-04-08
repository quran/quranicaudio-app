import { Component, PropTypes } from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { baseHeaderStyle } from '../../styles/variables';

// components
import AudioPlayer from '../../components/AudioPlayer';
import ReciterList from '../../components/ReciterList';
import Loader from '../../components/common/Loader';
import Search from '../../components/common/Search';

import { Container } from 'native-base';

export class Home extends Component {
  static navigationOptions = {
    title: 'QuranicAudio App',
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
    const { navigation, reciters, actions, search } = this.props;
    const { navigate } = navigation;
    if (reciters.length < 1) return <Loader />;

    return (
      <Container style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Search value={search.value} actions={actions} />
        <View />
        <ReciterList reciters={reciters} actions={{ navigate }} search={search} />
        <AudioPlayer />
      </Container>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    reciters: state.reciters.reciters,
    main: state.main,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
