import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { StatusBar, View, Platform, AppRegistry } from 'react-native';
import { AppNavigator } from './container/Root';
import reducers from './reducers';
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers';
import AudioPlayer from './container/AudioPlayer.js';
import TrackPlayer from 'react-native-track-player';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);

const store = createStore(
  reducers(AppNavigator),
  compose(applyMiddleware(thunk, navigationMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop) //eslint-disable-line
);

const mapStateToProps = state => ({
  state: state.navigation,
});

const App = reduxifyNavigator(AppNavigator, 'root');
const AppWithNavigationState = connect(mapStateToProps)(App);

// bind the store to the track player event handler, so we can update
// the store as a response to the different events e.g. remote-play, ducking, ...etc
if (Platform.OS === 'android') {
  AppRegistry.registerHeadlessTask('TrackPlayer', () => require('./trackPlayerEventHandler.js').bind(null, store));
} else {
  TrackPlayer.registerEventHandler(require('./trackPlayerEventHandler.js').bind(null, store));
}

const Main = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent />
      <AppWithNavigationState />
      <AudioPlayer />
    </View>
  </Provider>
);

export default Main;
