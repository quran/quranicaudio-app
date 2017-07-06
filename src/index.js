import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Root, { AppNavigator } from './container/Root';
import reducers from './reducers';
import AD from './container/AD';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers(AppNavigator));
const Main = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent />
      <Root />
      <AD />
    </View>
  </Provider>
);

export default Main;
