import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';

export default AppNavigator => combineReducers({
  main,
  reciters,
  navigation: navigation(AppNavigator)
});
