import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { baseHeaderStyle } from '../../styles/variables';

// components
import ChapterList from '../../components/ChapterList';
import Loader from '../../components/common/Loader';
import Search from '../../components/common/Search';

import { Container } from 'native-base';

class Chapters extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.reciter.name,
    ...baseHeaderStyle
  });

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { actions, navigation } = this.props;

    const { navigate } = navigation;
    const reciter = navigation.state.params.reciter;
    actions.getChapters();
    actions.loadFilesForReciter(reciter.id);
  }

  render() {
    const { navigation, chapters, actions, search, files } = this.props;
    const { navigate } = navigation;

    const filtered =
      search && search.value.length > 0
        ? chapters.filter(item =>
          item.name.simple.toLowerCase().match(search.value.toLowerCase())
        )
        : chapters;

    const reciter = navigation.state.params.reciter;
    if (chapters.length < 1 || files.length < 1) return <Loader />;
    return (
      <Container>
        <Search actions={actions} data={search} />
        <ChapterList
          chapters={filtered}
          files={files}
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
    files: state.files.files,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
