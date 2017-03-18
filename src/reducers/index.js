import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';

export default AppNavigator => combineReducers({
  main,
  navigation: navigation(AppNavigator)
});
