import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Root, { AppNavigator } from './container/Root';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers(AppNavigator));
const Main = () => (
  <Provider store={store}>
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar barStyle="light-content" translucent />
      <Root />
    </View>
  </Provider>
);

export default Main;
