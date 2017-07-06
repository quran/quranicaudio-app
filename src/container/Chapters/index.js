import { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { baseHeaderStyle } from '../../styles/variables';

// components
import AudioPlayer from '../../components/AudioPlayer';
import ChapterList from '../../components/ChapterList';
import Loader from '../../components/common/Loader';
import Search from '../../components/common/Search';

import { Container } from 'native-base';

export class Chapters extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.reciter.name,
    header: ({ state, setParams }, defaultHeader) => ({
      ...defaultHeader,
      ...baseHeaderStyle
    })
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.getChapters();
  }

  render() {
    const { navigation, chapters, actions, search } = this.props;
    const { navigate } = navigation;

    const reciter = navigation.state.params.reciter;

    if (chapters.length < 1) return <Loader />;

    return (
      <Container>
        <Search actions={actions} data={search} />
        <View />
        <ChapterList
          chapters={chapters}
          reciter={reciter}
          actions={{ ...actions, navigate }}
          search={search}
        />
      </Container>
    );
  }
}

Chapters.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    chapters: state.chapters.chapters,
    main: state.main,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
