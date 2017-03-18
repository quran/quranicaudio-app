import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Root, { AppNavigator } from './container/Root';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers(AppNavigator));
const Main = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default Main;
