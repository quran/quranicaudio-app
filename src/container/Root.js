import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomeContainer from './Home';
import Chapters from './Chapters';

export const AppNavigator = StackNavigator({
  Home: { screen: HomeContainer },
  Chapters: { screen: Chapters }
});

const AppWithNavigationState = ({ dispatch, navigation }) => (<AppNavigator
  navigation={addNavigationHelpers({
    dispatch,
    state: navigation,
  })}
/>);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(state => ({
  navigation: state.navigation
}))(AppWithNavigationState);
