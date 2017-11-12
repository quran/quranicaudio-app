import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomeContainer from './Home';
import Chapters from "./Chapters"; //eslint-disable-line
import AudioPlayer from './AudioPlayer';

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeContainer },
    Chapters: { screen: Chapters },
    AudioPlayer: { screen: AudioPlayer }
  },
  {
    mode: 'card',
    headerMode: 'screen'
  }
);

const AppWithNavigationState = ({ dispatch, navigation }) =>
  (<AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation
    })}
  />);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(state => ({
  navigation: state.navigation
}))(AppWithNavigationState);
