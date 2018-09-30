import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import ModalFilterPicker from 'react-native-modal-filter-picker';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { baseHeaderStyle } from '../../styles/variables';

import { SEARCH_FILTER_OPTIONS } from './filterOptions';

// components
import ReciterList from '../../components/ReciterList';
import Loader from '../../components/common/Loader';
import Search from '../../components/common/Search';
import Filter from '../../components/common/Filter';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: 'Quranic Audio',
      ...baseHeaderStyle,
      gesturesEnabled: true,
      headerRight: (
        <Filter onPress={params.toggleFilter} />
      ),
    };
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    filterVisible: false,
    section: 1,
  }

  componentDidMount() {
    this.props.actions.getReciters();

    this.props.navigation.setParams({
      toggleFilter: this.toggleFilter,
    });
  }

  onSelectFilter = (section) => {
    this.setState({ section, filterVisible: false });
  }

  toggleFilter = () => {
    this.setState({ filterVisible: !this.state.filterVisible });
  }

  render() {
    const { navigation, reciters, actions, search } = this.props;
    const { navigate } = navigation;
    if (reciters.length < 1) return <Loader />;
    const filtered =
      search && search.value.length > 0
        ? reciters.filter(item =>
          item.name.toLowerCase().match(search.value.toLowerCase())
        )
        : reciters;

    return (
      <Container style={{ height: 100 }}>
        <Search actions={actions} data={search} />
        <ReciterList
          reciters={filtered}
          actions={{ ...actions, navigate }}
          search={search}
          section={this.state.section}
        />
        <ModalFilterPicker
          visible={this.state.filterVisible}
          onSelect={this.onSelectFilter}
          onCancel={this.toggleFilter}
          options={SEARCH_FILTER_OPTIONS}
          showFilter={false}
        />
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
