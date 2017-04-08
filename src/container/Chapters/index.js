import { Component, PropTypes } from 'react';
import {
  StyleSheet
} from 'react-native';

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
    title: ({ state }) => state.params.name,
    header: ({ state, setParams }, defaultHeader) => ({
      ...defaultHeader,
      ...baseHeaderStyle
    })
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.navigation.state.params.data;
    this.props.actions.getFiles(id);
    this.props.actions.getChapters();
  }

  render() {
    const { navigation, chapters, actions, search, files } = this.props;
    const { navigate } = navigation;
    if (chapters.length < 1 || files.length < 1) return <Loader />;
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Search value={search.value} actions={actions} />
        <ChapterList chapters={chapters} actions={{ navigate }} search={search.value} files={files} />
        <AudioPlayer />
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
    search: state.search,
    files: state.files.data
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 50
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
